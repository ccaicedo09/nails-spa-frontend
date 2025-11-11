import axios from "./axios";
import { User } from "../types/usuarios";

type UsersAxiosResponse = {
  limit: number
  page: number
  totalPages: number
  totalUsers: number
  customers: User[]
}

// Obtener todos los clientes
export const getAllCustomersRequest = () =>
  axios.get<UsersAxiosResponse>("/users/customers");

// Actualizar usuario por ID
export const updateUserRequest = (id: string, userData: Partial<User>) =>
  axios.put<User>(`/users/${id}`, userData);

// Eliminar usuario por ID
export const deleteUserRequest = (id: string) =>
  axios.delete(`/users/${id}`);