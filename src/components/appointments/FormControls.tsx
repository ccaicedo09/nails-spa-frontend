import React from 'react'
import { useFormContext } from './AppointmentFormContext';

const FormControls = () => {
    const { nextStep, prevStep } = useFormContext();
  return (
    <div
      className="container form-controls"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        gap: "3rem",
      }}
    >
      <button className="btn btn-lg btn-secondary" onClick={prevStep}>
        ← Anterior
      </button>
      <button className="btn btn-lg btn-primary" onClick={nextStep}>
        Continuar →
      </button>
    </div>
  );
}

export default FormControls