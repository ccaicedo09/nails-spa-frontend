export interface Service {
  _id: string;
  name: string;
  description: string;
  price: number;
  staffCapable: string[]; // Referencias a User._id
  duration: number; // En minutos
  pictureUrl?: string;
}