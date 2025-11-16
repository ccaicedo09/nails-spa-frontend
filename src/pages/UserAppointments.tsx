import { useEffect, useState } from "react";
import { getUserAppointmentsRequest, deleteAppointmentRequest } from "../api/citas";
import { PopulatedAppointment } from "../types/citas";
import AppointmentCard from "../components/appointments/AppointmentCard";
import FilterBar, { Filters } from "../components/ui/FilterBar";
import Pagination from "../components/ui/Pagination";
import AppointmentWizard from "../components/appointments/AppointmentWizard";

type Meta = {
  total: number,
  page: number,
  limit: number,
  totalPages: number
}

const UserAppointments = () => {
  const [appointments, setAppointments] = useState<PopulatedAppointment[]>([]);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [filters, setFilters] = useState<Filters>({ page: 1, limit: 10, cancelled: undefined})
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const [editingAppointment, setEditingAppointment] =
    useState<PopulatedAppointment | null>(null);

  const fetchAppointments = async (params?: Filters) => {
    try {
      setLoading(true);
      const response = await getUserAppointmentsRequest(params || filters);
      
      // Manejar diferentes estructuras de respuesta posibles
      let appointmentsData: any[] = [];
      let incomingMeta: Meta | null = null;
      
      if (Array.isArray(response.data)) {
        appointmentsData = response.data;
      } else if (response.data && Array.isArray(response.data.appointments)) {
        appointmentsData = response.data.appointments;
      } else if (response.data && response.data.data && Array.isArray(response.data.data)) {
        appointmentsData = response.data.data;
        if (response.data.meta) {
          incomingMeta = response.data.meta as Meta;
        }
      }
      
      setAppointments(appointmentsData);

      if (incomingMeta) setMeta(incomingMeta);
      else setMeta((prev) => prev ?? { total: appointmentsData.length, page: 1, limit: appointmentsData.length || 10, totalPages: 1})

      setError(null);
    } catch (err: any) {
      console.error("Error al obtener citas:", err);
      setError(err.response?.data?.message || "No se pudieron cargar las citas");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, [filters.page, filters.limit, filters.date, filters.from, filters.to, filters.cancelled]);

  const handleDeleteAppointment = async (appointmentId: string) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas cancelar esta cita?"
    );

    if (!confirmDelete) return;

    try {
  setDeletingId(appointmentId);
  await deleteAppointmentRequest(appointmentId);
      
      // Actualizar la lista de citas
      setAppointments(prev => prev.filter(apt => apt._id !== appointmentId));
      
      alert("Cita cancelada exitosamente");
    } catch (err: any) {
      console.error("Error al cancelar cita:", err);
      const errorMessage = err.response?.data?.message || "No se pudo cancelar la cita";
      alert(errorMessage);
    } finally {
      setDeletingId(null);
    }
  };

  // Helpers para ordenar: próximas primero y realizadas después
  const isPast = (apt: PopulatedAppointment) => {
    const endDateTime = new Date(`${apt.schedule.date}T${apt.schedule.end}`);
    return endDateTime < new Date();
  };

  const getStart = (apt: PopulatedAppointment) => {
    return new Date(`${apt.schedule.date}T${apt.schedule.start}`);
  };

  const applyFilters = (f: Filters) => {
    setFilters((prev) => ({ ...prev, ...f, page: 1}))
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto min-h-screen px-6 py-8">
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
          <div className="w-12 h-12 border-4 border-pink-100 border-t-pink-600 rounded-full animate-spin"></div>
          <p>Cargando tus citas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto min-h-screen px-6 py-8">
      <div className="text-center mb-6 py-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-pink-700 mb-2 font-extrabold">
          Mis Citas
        </h1>
      </div>

      {/* Filtros reutilizables */}
      <FilterBar initial={filters} onApply={applyFilters} />

      {loading && (
        <div className="flex flex-col items-center justify-center min-h-[200px] gap-4">
          <div className="w-12 h-12 border-4 border-pink-100 border-t-pink-600 rounded-full animate-spin"></div>
          <p>Cargando tus citas...</p>
        </div>
      )}

      {!loading && error && (
        <div className="bg-amber-100 border border-amber-500 rounded-xl p-6 text-center mb-8">
          <p className="text-amber-800 mb-4 text-lg">{error}</p>
          <button
            onClick={() => fetchAppointments(filters)}
            className="bg-amber-500 text-white px-6 py-3 rounded-full font-semibold cursor-pointer transition-all duration-300 hover:bg-amber-600 hover:-translate-y-0.5"
          >
            Reintentar
          </button>
        </div>
      )}

      {!loading && !error && appointments.length === 0 && (
        <div className="text-center p-16 bg-white rounded-3xl shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-pink-600 mb-6"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <h2 className="text-gray-800 mb-4 text-2xl font-bold">
            No tienes citas programadas
          </h2>
          <p className="text-gray-500 mb-8 text-lg">
            Cuando agendes una cita, aparecerá aquí.
          </p>
          <a
            href="/citas"
            className="inline-block bg-pink-600 text-white py-3.5 px-8 rounded-full no-underline font-semibold transition-all duration-300 hover:bg-pink-700 hover:-translate-y-0.5"
          >
            Agendar una cita
          </a>
        </div>
      )}

      {!loading && !error && appointments.length > 0 && (
        <>
          <div
            className="grid gap-6 mt-4"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            }}
          >
            {[...appointments]
              .filter((appointment) => appointment.service !== null)
              .sort((a, b) => {
                const aPast = isPast(a);
                const bPast = isPast(b);
                if (aPast !== bPast) return aPast ? 1 : -1;
                if (!aPast)
                  return getStart(a).getTime() - getStart(b).getTime();
                return getStart(b).getTime() - getStart(a).getTime();
              })
              .map((appointment) => (
                <AppointmentCard
                  key={appointment._id}
                  appointment={appointment}
                  deletingId={deletingId}
                  onDelete={handleDeleteAppointment}
                  onEdit={(apt) => setEditingAppointment(apt)}
                />
              ))}
          </div>

          {/* Paginación */}
          <div className="mt-8">
            <Pagination
              page={filters.page || meta?.page || 1}
              totalPages={meta?.totalPages || 1}
              onPageChange={(p) => setFilters((prev) => ({ ...prev, page: p }))}
            />
            <p className="text-center text-sm text-gray-500 mt-2">
              Página {meta?.page ?? filters.page ?? 1} de{" "}
              {meta?.totalPages ?? 1} · {meta?.total ?? appointments.length}{" "}
              resultados
            </p>
          </div>
        </>
      )}

      {editingAppointment && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-4">
            <AppointmentWizard
              mode="edit"
              initialAppointment={editingAppointment}
              // userId opcional en modo edit
              onSuccess={(updated) => {
                // Refrescar la lista local con la cita actualizada
                setAppointments((prev) =>
                  prev.map((apt) => (apt._id === updated._id ? updated : apt))
                );
                setEditingAppointment(null);
              }}
              onClose={() => setEditingAppointment(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAppointments;
