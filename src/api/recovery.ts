import { Auth } from "../types/auth";
import { ResponseAuth } from "../types/responseAuth";
import instance from "./axios";

export const generateRecoveryCode = (account: Auth) => {
  instance.post<ResponseAuth>("/recovery/generate", account);
}

export const updatePassword = (updatedAccount: Auth) => {
  instance.post<ResponseAuth>("/recovery", updatedAccount);
}