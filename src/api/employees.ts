import axios from "./axios";
import { User } from "../types/usuarios";

type EmployeeResponse = {
  employees: User[];
  limit: number;
  page: number;
  total: number;

}


// Obtener todos los empleados (solo admin)
export const getAllEmployeesRequest = () =>
  axios.get<EmployeeResponse>("/employees?limit=20");

// Guardar un nuevo empleado
export const saveEmployeeRequest = (employee: Omit<User, "_id">) =>
  axios.post<User>("/employees/save", employee);

export const getEmployeeByLocationRequest = (locationId: string) =>
  axios.get<EmployeeResponse>(`/employees/sede/${locationId}`);