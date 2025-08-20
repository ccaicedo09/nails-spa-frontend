import React, { useState } from "react";
import AppointmentForm from "../components/appointments/AppointmentForm";
import Review from "../components/appointments/Review";
import "./styles/Appointments.css";
import {
  FormProvider,
  useFormContext,
} from "../components/appointments/AppointmentFormContext";
import { useAppointmentNavigation } from "../hooks/useAppointmentNavigation";

const MobileLayout = ({ showReview, setShowReview }) => {
  const { currentStep, handleNext, handlePrev, showModal, setShowModal } = useAppointmentNavigation();

  return (
    <div className="show-sm show-md hide-lg">
      <AppointmentForm />

      <div className="mobile-controls">
        <button
          className="btn btn-sm btn-link text-white"
          onClick={() => setShowReview(!showReview)}
        >
          {showReview ? "Ocultar resumen ↓" : "Ver resumen de cita ↑"}
        </button>

        <div className="btn-group">
          {currentStep > 1 && (
            <button className="btn btn-secondary" onClick={handlePrev}>
              Anterior
            </button>
          )}
          {currentStep < 3 && (
            <button className="btn btn-primary" onClick={handleNext}>
              Siguiente
            </button>
          )}
          {currentStep === 3 && (
            <button
              className="btn btn-primary"
              onClick={() => setShowReview(true)}
            >
              Revisar cita
            </button>
          )}
        </div>
      </div>

      {showReview && (
        <div className="review-mobile-container my-2">
          <Review isMobile />
        </div>
      )}
    </div>
  );
};

const Appointments = () => {
  const [showReview, setShowReview] = useState(false);

  return (
    <FormProvider>
      <div className="mx-auto max-w-7xl px-4 appointments-container my-2">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-6 md:grid-cols-12">
          <aside className="text-center appointment-review md:col-span-5">
            <Review />
          </aside>
          <section className="appointment-form md:col-span-7">
            <AppointmentForm />
          </section>
        </div>

        {/* Small screens */}
        <MobileLayout showReview={showReview} setShowReview={setShowReview} />
      </div>
    </FormProvider>
  );
};

export default Appointments;
