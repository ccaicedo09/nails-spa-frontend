import React, { useState } from 'react'
import { useFormContext } from './AppointmentFormContext';
import { useNavigate } from 'react-router-dom';

const FormControls = () => {
  const {
    nextStep,
    prevStep,
    currentStep,
    services,
    specialist,
    startDate,
    endDate,
    setServices,
    setSpecialist,
    setStartDate,
    setEndDate,
    setTotalTime,
    setCurrentStep,
  } = useFormContext();

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

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

  const handleConfirm = () => {
    if (!startDate || !endDate) {
      alert("Selecciona una fecha y hora válidas antes de confirmar.");
      return;
    }

    setShowModal(true);
  };

  const handleReset = () => {
    setServices([]);
    setSpecialist(null);
    setStartDate(null);
    setEndDate(null);
    setTotalTime(0);
    setShowModal(false);
    setCurrentStep(1);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <>
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
        {currentStep === 3 && startDate && endDate && (
          <button className="btn btn-lg btn-primary" onClick={handleConfirm}>
            Confirmar cita
          </button>
        )}
      </div>

      {showModal && (
        <div
          className="modal active"
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-container">
            <div className="modal-header">
              <button
                className="btn btn-clear float-right"
                onClick={() => setShowModal(false)}
              ></button>
              <h5 className="modal-title">Confirmación de cita</h5>
            </div>
            <div className="modal-body">
              <p>
                <strong>Especialista:</strong> {specialist?.name}
              </p>
              <p>
                <strong>Servicios:</strong>
              </p>
              <ul>
                {services.map((s) => (
                  <li key={s.id}>
                    {s.name} ({s.estimated_duration} min) - $
                    {s.price.toLocaleString("es-CO")}
                  </li>
                ))}
              </ul>
              <p>
                <strong>Fecha y hora:</strong>{" "}
                {startDate?.toLocaleDateString("es-CO")} de{" "}
                {startDate?.toLocaleTimeString("es-CO", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}{" "}
                a{" "}
                {endDate?.toLocaleTimeString("es-CO", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={handleReset}>
                Hacer otra cita
              </button>
              <button className="btn btn-link" onClick={handleGoHome}>
                Ir a la página principal
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormControls;