export interface Service {
  id: number;
  name: string;
  description: string;
  estimated_duration: number;
  price: number;
}

export interface Specialist {
  id: number;
  name: string;
  email: string;
  phone: string;
}