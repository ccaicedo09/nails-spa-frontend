import { Appointment } from "../../types/citas";
import { CitasByEmployee } from "../../types/responseAppointmentByEmployee";

interface Props {
  cita: CitasByEmployee 
  hasLocation?: boolean
}

const CitasCard = ({ cita,hasLocation}: Props) => {
  const { schedule, service, employee, location, user } = cita;

  return (
    
    <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-300 rounded-xl shadow-lg p-6 mb-4 "
          >
            
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-ose-600 mb-1">{service.name}</h3>
        <p className="text-gray-700 text-sm">${service.price}</p>
      </div>
      <div className="space-y-2 text-gray-600 text-sm">
        <p><span className="font-medium text-rose-800">Fecha:</span> {schedule.date}</p>
        <p><span className="font-medium text-rose-800">Hora:</span> {schedule.start} → {schedule.end}</p>
        <p><span className="font-medium text-rose-800">Cliente:</span> {user.names}</p>
        <p><span className="font-medium text-rose-800">Empleado:</span> {employee.names} ({employee.phone})</p>
        {hasLocation && 
          <p><span className="font-medium text-rose-800">Sede:</span> {location.name} - {location.address}</p>
        }
          
      </div>
    </div>
  )
}

export default CitasCard