export type UserRole = 'customer' | 'admin' | 'employee';

export interface User {
  _id: string;
  names: string;
  email: string;
  password: string;
  salary?: number;
  phone: string;
  role: UserRole;
  locations: string[]; // Referencias a Location._id
}