import { useState, useEffect } from "react";

import {getAllServicesRequest} from "../../api/services";
import {getAllLocationsRequest} from "../../api/locations";
import {getAvailabilityRequest, createAppointmentRequest} from "../../api/citas";

import { Service } from "../../types/servicios";
import { Location } from "../../types/sedes";
import { Appointment, AvailabilityResponse } from "../../types/citas";
import { User } from "../../types/usuarios";


export default function AppointmentWizard({ userId }: { userId: string }) {
  const [step, setStep] = useState(1);

  const [services, setServices] = useState<Service[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");

  const [availabilityData, setAvailabilityData] = useState<AvailabilityResponse | null>(null);
  const [selectedEmployee, setSelectedEmployee] = useState<string>("");
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState<Appointment | null>(null);

  useEffect(() => {
  const fetchInitialData = async () => {
    try {
      const [servicesRes, locationsRes] = await Promise.all([
        getAllServicesRequest(),
        getAllLocationsRequest()
      ]);
      setServices(servicesRes.data.services);
      setLocations(locationsRes.data.locations);
    } catch (error) {
      console.error("Error al cargar servicios o sedes:", error);
    }
  };

  fetchInitialData();
}, []);


  //---------------------------------LOGS------------------------------------------
console.log("Services:", services);
    console.log("Locations:", locations);
  console.log("Step:", step);
  console.log("Selected Service:", selectedService);
  console.log("Selected Location:", selectedLocation);
    console.log("Selected Date:", selectedDate);
    console.log("Availability Data:", availabilityData);
    console.log("Selected Employee:", selectedEmployee);
    console.log("Selected Slot:", selectedSlot);
    //---------------------------------LOGS------------------------------------------


  // Paso 3: consultar disponibilidad
  const checkAvailability = async () => {
    setLoading(true);
    const res = await getAvailabilityRequest({
      idService : selectedService,
      idLocation: selectedLocation,
      date: selectedDate,
    });
    setAvailabilityData(res.data);

    setLoading(false);
  };

  // Paso final: crear cita
  const submitAppointment = async () => {
    const service = selectedService;
    const location = selectedLocation;
    const employee = selectedEmployee;
    const schedule = {
      date: selectedDate,
      start: selectedSlot,
      end: calculateEndTime(selectedSlot, services.find(s => s._id === service)?.duration || 30),
    };

    console.log("Submitting appointment with:", {
      service,
      location,
      employee,
      schedule,
      additionalDescription: description,
      user: userId,
    });

    const res = await createAppointmentRequest({
      service,
      location,
      employee,
      schedule,
      additionalDescription: description,
      user: userId,
    });

    setConfirmation(res.data);
    setStep(6);
  };

  const calculateEndTime = (start: string, duration: number): string => {
    const [h, m] = start.split(":").map(Number);
    const end = new Date(0, 0, 0, h, m);
    end.setMinutes(end.getMinutes() + duration);
    return `${end.getHours().toString().padStart(2, "0")}:${end.getMinutes().toString().padStart(2, "0")}`;
  };

  // Renderizado por pasos
  return (
    <div className="max-w-3xl mx-auto p-4 h-[75vh]">
      <h2 className="text-2xl font-bold mb-4">Reserva tu cita</h2>
      <div className="mb-6">
  <div className="w-full bg-gray-200 rounded-full h-2.5">
    <div
      className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
      style={{ width: `${(step - 1) * 20}%` }}
    />
  </div>
</div>

      {step === 1  && (
        <>

         {services.length === 0 ? (
  <p>Cargando servicios...</p>
) : (
  <ul className="space-y-2">
    {services.map(service => (
      <li key={service._id}>
        <button
          className="w-full text-left p-2 border rounded hover:bg-gray-100"
          onClick={() => {
            setSelectedService(service._id);
            setStep(2);
          }}
        >
          {service.name} - ${service.price} | {service.duration} mins
        </button>
      </li>
    ))}
  </ul>
)}
      </>
       
      )}

      {step === 2 && (
        <>
        {locations.length === 0 ? (
  <p>Cargando sedes...</p>
) : (
  <ul className="space-y-2">
    {locations.map(location => (
      <li key={location._id}>
        <button
          className="w-full text-left p-2 border rounded hover:bg-gray-100"
          onClick={() => {
            setSelectedLocation(location._id);
            setStep(3);
          }}
        >
          {location.name} - {location.address}
        </button>
      </li>
    ))}

     <button onClick={() => setStep(1)} className="mt-4 text-sm text-blue-500">← Volver</button>
  </ul>
)}
      </>
      )}

      {step === 3 && (
        <div>
         <div className="mb-6">
  <label className="block text-lg font-semibold text-gray-700 mb-2">📅 Selecciona una fecha:</label>
  <input
    type="date"
    value={selectedDate}
    onChange={e => setSelectedDate(e.target.value)}
    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  
</div>

<button
  onClick={() => {
    if (selectedDate) {
      checkAvailability();
      setStep(4);
    }
  }}
  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold"
>
  🔍 Ver disponibilidad
</button>
 <button onClick={() => setStep(2)} className="mt-4 text-sm text-blue-500">← Volver</button>
        </div>
      )}

      {step === 4 && (
        <div>
          {loading ? (
            <p>Cargando disponibilidad...</p>
          ) : (
            <div>
              <h3 className="font-semibold mb-2">Empleados disponibles:</h3>
              {availabilityData?.availability.map(emp => (
                <div key={emp.employeeId} className="mb-4">
                  <p className="font-medium">{emp.employeeName}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {emp.availableSlots.map(slot => (
                      <button
  key={slot}
  onClick={() => {
    setSelectedEmployee(emp.employeeId);
    setSelectedSlot(slot);
    setStep(5);
  }}
  className={`px-4 py-2 rounded-lg border shadow-sm transition duration-200 ${
    selectedEmployee === emp.employeeId && selectedSlot === slot
      ? "bg-blue-600 text-white border-blue-600"
      : "bg-white text-gray-800 hover:bg-blue-50"
  }`}
>
  🕒 {slot} - {calculateEndTime(slot, services.find(s => s._id === selectedService)?.duration || 30)}
</button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          <button onClick={() => setStep(3)} className="mt-4 text-sm text-blue-500">← Volver</button>
        </div>
      )}

      {step === 5 && (
        <div>
          <label className="block mb-2">Descripción adicional:</label>
          <textarea
  value={description}
  onChange={e => setDescription(e.target.value)}
  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
  rows={4}
  placeholder="¿Hay algo que debamos saber antes de tu cita?"
/>
          <button onClick={submitAppointment} className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold">
            Confirmar cita</button>
          <button onClick={() => setStep(4)} className="mt-4 text-sm text-blue-500">← Volver</button>
        </div>
      )}

      {step === 6 && confirmation && (
        <div className="bg-green-100 p-4 rounded">
          <h3 className="text-xl font-bold">¡Cita confirmada!</h3>
          <p>Servicio: {confirmation.service}</p>
          <p>Empleado: {confirmation.employee}</p>
          <p>Fecha: {confirmation.schedule.date}</p>
          <p>Hora: {confirmation.schedule.start} - {confirmation.schedule.end}</p>
          <p>Sede: {confirmation.location}</p>
        </div>
      )}
    </div>
  );
}