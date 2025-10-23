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
}