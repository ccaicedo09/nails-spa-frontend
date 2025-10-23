import axios from "./axios";
import { User } from "../types/usuarios";

// Obtener todos los clientes
export const getAllCustomersRequest = () =>
  axios.get<User[]>("/users/customers");

// Actualizar usuario por ID
export const updateUserRequest = (id: string, userData: Partial<User>) =>
  axios.put<User>(`/users/${id}`, userData);

// Eliminar usuario por ID
export const deleteUserRequest = (id: string) =>
  axios.delete(`/users/${id}`);