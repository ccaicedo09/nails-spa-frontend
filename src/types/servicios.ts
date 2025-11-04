export interface Service {
  _id: string;
  name: string;
  description: string;
  price: number;
  staffCapable: string[]; // Referencias a User._id
  duration: number; // En minutos
  pictureUrl?: string;
}

export interface PaginatedServices {
  page: number;
  limit: number;
  totalPages: number;
  totalServices: number;
  services: Service[];
}
