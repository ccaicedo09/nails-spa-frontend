import { User } from "../types/usuarios";
import { Auth } from "../types/auth"
import { ResponseAuth } from "../types/responseAuth";
import instance from "./axios";

export const createCustomer = (customer: Omit<User, '_id' | 'role' | 'locations'>) => {
  return instance.post<ResponseAuth>("/auth/register", customer);
}

export const accessAccount = (account: Auth) => {
  return instance.post<ResponseAuth>("/auth/login", account);
}

export const logoutAccount = () => {
  return instance.get<ResponseAuth>("/auth/logout");
}

export const checkCredentials = () => {
  return instance.get<ResponseAuth>("/auth/check");
}

export const getProfile = () => {
  return instance.get("/auth/profile");
}