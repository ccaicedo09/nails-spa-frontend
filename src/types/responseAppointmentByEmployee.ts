export interface CitasByEmployee {
  schedule: {
    date: string;
    start: string;
    end: string;
  };
  service: {
    name: string;
    price: number;
  };
  employee: {
    names: string;
    phone: string;
  };
  location: {
    name: string;
    address: string;
  };
  user: {
    names: string;
  };
}

export interface ResponseCitasByEmployee {
  data: CitasByEmployee[];
  message?: string;
}
