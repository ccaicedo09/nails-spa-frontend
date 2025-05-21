import React from 'react'
import { useFormContext } from './AppointmentFormContext';

const FormControls = () => {
  const {
    nextStep,
    prevStep,
    currentStep,
    services,
    specialist,
    startDate,
    endDate,
  } = useFormContext();

  const handleNext = () => {
    let isValid = false;

    switch (currentStep) {
      case 1:
        isValid = services.length > 0;
        if (!isValid) alert("Por favor selecciona al menos un servicio.");
        break;
      case 2:
        isValid = specialist !== null;
        if (!isValid) alert("Por favor selecciona un especialista.");
        break;
      case 3:
        isValid = startDate !== null && endDate !== null;
        if (!isValid) alert("Por favor selecciona una fecha y hora válida.");
        break;
      default:
        isValid = true;
    }

    if (isValid) nextStep();
  };

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
      {currentStep > 1 && (
        <button className="btn btn-lg btn-secondary" onClick={prevStep}>
          ← Anterior
        </button>
      )}
      {currentStep < 3 && (
        <button className="btn btn-lg btn-primary" onClick={handleNext}>
          Continuar →
        </button>
      )}
    </div>
  );
};

export default FormControls;