import { useEffect, useState } from "react"
import { getAppointmentsByEmployeeRequest } from "../../api/citas";
import axios from "axios";
import { CitasByEmployee } from "../../types/responseAppointmentByEmployee";
import Cookies from "js-cookie";
import CitasEmployeeCard from "./CitasEmployeeCard";

const Dashboard = () => {
  const [appointments, setAppointments] = useState<CitasByEmployee[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const employeeId = Cookies.get("userId") || "";

    const fetchAppointments = async () => {
      try {
        const res = await getAppointmentsByEmployeeRequest(employeeId);
        setAppointments(res.data.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data.message || "Error al cargar citas");
        } else {
          setError("Error desconocido al cargar citas");
        }
      }
    }

    fetchAppointments();
  }, []);

  
  if (error) return <p className="text-red-600 text-center mt-6 text-lg font-semibold">{error}</p>;

  return (
    <div className="px-6 py-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Citas del Empleado</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appointments.map((cita, i) => (
          <CitasEmployeeCard key={i} cita={cita} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard