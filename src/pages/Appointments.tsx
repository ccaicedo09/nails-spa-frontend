import React, { useState } from "react";
import AppointmentForm from "../components/appointments/AppointmentForm";
import Review from "../components/appointments/Review";
import "./styles/Appointments.css";
import {
  FormProvider,
  useFormContext,
} from "../components/appointments/AppointmentFormContext";
import { useAppointmentNavigation } from "../hooks/useAppointmentNavigation";
import AppointmentWizard from "../components/appointments/AppointmentWizard";


const Appointments = () => {
  const [showReview, setShowReview] = useState(false);

  return (
    <AppointmentWizard userId="68d68aeb667f13de9ebea70d" />
  );
};

export default Appointments;
