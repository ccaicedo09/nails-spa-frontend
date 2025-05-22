import React, { useState } from "react";
import AppointmentForm from "../components/appointments/AppointmentForm";
import Review from "../components/appointments/Review";
import "./styles/Appointments.css";
import {
  FormProvider,
} from "../components/appointments/AppointmentFormContext";
import FormControls from "../components/appointments/FormControls";

const MobileLayout = ({ showReview, setShowReview }) => {

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

        <FormControls />
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
      <div className="container appointments-container my-2">
        {/* Big screens */}
        <div className="columns hide-sm hide-md">
          <aside className="text-center appointment-review column col-5">
            <Review />
          </aside>
          <section className="appointment-form column col-7">
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
