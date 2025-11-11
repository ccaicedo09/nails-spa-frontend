import axios from "./axios";
import { ResponseCitasByEmployee } from "../types/responseAppointmentByEmployee";
import { Appointment, AvailabilityResponse, CitasBySedeResponse, CreateAppointmentServerResponse } from "../types/citas"; // Ajusta la ruta según tu estructura

// Obtener todas las citas (admin/employee)
export const getAppointmentsRequest = () =>
  axios.get<Appointment[]>("/appointments");

// Obtener citas por empleado
export const getAppointmentsByEmployeeRequest = (id: string) =>
  axios.get<ResponseCitasByEmployee>(`/appointments/employee/${id}`);

// Obtener citas del usuario autenticado
export const getUserAppointmentsRequest = () =>
  axios.get("/appointments/user");

// Crear una nueva cita
export const createAppointmentRequest = (appointment: Omit<Appointment, "_id">) =>
  axios.post<CreateAppointmentServerResponse>("/appointments", appointment);

// Consultar disponibilidad para un servicio en una ubicación
export const getAvailabilityRequest = (payload: {
  idLocation: string;
  idService: string;
  date: string; // YYYY-MM-DD
}) =>
  axios.post<AvailabilityResponse>(

    "/appointments/availability",
    payload
  );

// Eliminar/Cancelar una cita
export const deleteAppointmentRequest = (appointmentId: string) =>
  axios.delete(`/appointments/${appointmentId}`);

// Traer citas por sede
export const getAppointmentsByLocationRequest = (locationId: string) =>
  axios.get<CitasBySedeResponse[]>(`/appointments/sede/${locationId}`);
