export interface Location {
  _id: string;
  name: string;
  address: string;
  schedule: string;
  manager: string;
  phone: string;
  employees: string[]; // Referencias a User._id
  pictureUrl?: string;
  appointments: string[]; // Referencias a Appointment._id
}