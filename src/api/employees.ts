import axios from "./axios";
import { User } from "../types/usuarios";

// Obtener todos los empleados (solo admin)
export const getAllEmployeesRequest = () =>
  axios.get<User[]>("/employees");

// Guardar un nuevo empleado
export const saveEmployeeRequest = (employee: Omit<User, "_id">) =>
  axios.post<User>("/employees/save", employee);