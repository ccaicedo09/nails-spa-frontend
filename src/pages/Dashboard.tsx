import { useEffect, useState } from "react"
import { getAppointmentsByEmployeeRequest, getAppointmentsByLocationRequest } from "../api/citas";
import axios from "axios";
import { CitasByEmployee } from "../types/responseAppointmentByEmployee";
import Cookies from "js-cookie";
import CitasCard from "../components/dashboards/CitasCard";
import AdminDashboard from "../components/dashboards/admin/AdminDashboard";


const Dashboard = () => {
  const [appointments, setAppointments] = useState<CitasByEmployee[]>([]);
  const [error, setError] = useState<string | null>(null);
  

  const role = Cookies.get("role");
 

  useEffect(() => {
    const employeeId = Cookies.get("userId") || "";

    const fetchAppointments = async () => {
      try {
        if(role === "employee"){
          const res = await getAppointmentsByEmployeeRequest(employeeId);
          setAppointments(res.data.data);
        }
        if(role === "manager"){
          const res: any = await getAppointmentsByLocationRequest("Nails Spa Neiva");

      
          console.log(res)
         setAppointments(res.data.appointments);
        }
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


  if(role == "employee") return (
    <div className="px-6 py-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Panel de Empleado</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appointments.map((cita, i) => (
          <CitasCard key={i} cita={cita} />
        ))}
      </div>
    </div>
  );

  if(role === "admin") return (
    <div className="px-6 py-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Panel de Administrador</h2>
      <AdminDashboard />
      
       
      </div>
      
  )

  if(role === "manager") return (
    <div className="px-6 py-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Panel de Gerente de sede</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Citas de su sede</h3>
          
            {appointments.map((cita, i) => (
              <CitasCard hasLocation={false} key={i} cita={cita} />
            ))}
        </div>
       

      </div>
      </div>
  );

  return <p className="text-red-600 text-center mt-6 text-lg font-semibold">No autorizado</p>;
}

export default Dashboard