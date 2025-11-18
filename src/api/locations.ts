import axios from "./axios";
import { Location, PaginatedLocations } from "../types/sedes";

// Obtener todas las ubicaciones
export const getAllLocationsRequest = () =>
  axios.get<PaginatedLocations>("/locations");

// Obtener una ubicación por ID
export const getLocationByIdRequest = (id: string) =>
  axios.get<Location>(`/locations/${id}`);

// Agregar empleados a una ubicación
export const addEmployeesToLocationRequest = (
  locationId: string,
  employeeIds: string[]
) =>
  axios.post<Location>(`/locations/${locationId}/employees`, {
    employees: employeeIds,
  });

  export const location = "Nails Spa Neiva";