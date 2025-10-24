import axios from "./axios";
import { Appointment, AvailabilityResponse } from "../types/citas"; // Ajusta la ruta según tu estructura

// Obtener todas las citas (admin/employee)
export const getAppointmentsRequest = () =>
  axios.get<Appointment[]>("/appointments");

// Obtener citas por empleado
export const getAppointmentsByEmployeeRequest = (id: string) =>
  axios.get<Appointment[]>(`/appointments/employee/${id}`);

// Obtener citas por usuario (cliente)
export const getAppointmentsByUserRequest = (id: string) =>
  axios.get<Appointment[]>(`/appointments/user/${id}`);

// Crear una nueva cita
export const createAppointmentRequest = (appointment: Omit<Appointment, "_id">) =>
  axios.post<Appointment>("/appointments", appointment);

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