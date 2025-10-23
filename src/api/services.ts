import axios from "./axios";
import { PaginatedServices, Service } from "../types/servicios";

// Obtener todos los servicios
export const getAllServicesRequest = () =>
  axios.get<PaginatedServices>("/services/");

// Obtener un servicio por ID
export const getServiceByIdRequest = (id: string) =>
  axios.get<Service>(`/services/${id}`);

// Agregar staff a un servicio
export const addStaffToServiceRequest = (
  serviceId: string,
  staffIds: string[]
) =>
  axios.post<Service>(`/services/${serviceId}/staff`, {
    staff: staffIds,
  });