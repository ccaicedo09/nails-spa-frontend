export interface Appointment {
  _id: string;
  service: string; // Referencia a Service._id
  employee?: string; // Referencia a User._id
  location: string; // Referencia a Location._id
  schedule: {
    date: string;   // YYYY-MM-DD
    start: string;  // HH:mm
    end: string;    // HH:mm
  };
  additionalDescription: string;
  user: string; // Referencia a User._id
  cancelled?: boolean;
}

export interface CreateAppointmentServerResponse {
  message: string;
  appointment?: PopulatedAppointment;
}

export interface UpdateAppointmentServerResponse {
  message: string;
  appointment?: PopulatedAppointment;
}

export interface AvailabilityResponse {
  date: string;
  location: string;
  service: string;
  serviceDuration: number;
  availability: {
    employeeId: string;
    employeeName: string;
    availableSlots: string[];
  }[];
  message?: string;
}

export interface PopulatedAppointment {
  _id: string;
  schedule: {
    date: string;   // YYYY-MM-DD
    start: string;  // HH:mm
    end: string;    // HH:mm
  };
  service: {
    _id: string;
    name: string;
    price: number;
  };
  employee: {
    _id: string;
    names: string;
    phone: string;
  };
  location: {
    _id: string;
    name: string;
    address: string;
  };
  user: {
    _id: string;
    names: string;
  };
  additionalDescription: string;
  cancelled: boolean;
  __v: number;
}

export interface PaginatedAppointmentsResponse {
  appointments: PopulatedAppointment[];
  totalAppointments?: number;
  currentPage?: number;
  totalPages?: number;
}