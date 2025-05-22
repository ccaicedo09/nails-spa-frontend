import React, { useState } from 'react'
import { useFormContext } from './AppointmentFormContext';
import { useNavigate } from 'react-router-dom';
import { useAppointmentNavigation } from '../../hooks/useAppointmentNavigation';

const FormControls = () => {
  const {
    currentStep,
    startDate,
    endDate,
    specialist,
    services,
    showModal,
    setShowModal,
    handleNext,
    handlePrev,
    handleConfirm,
    handleReset,
    handleGoHome,
  } = useAppointmentNavigation();

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
          <button className="btn btn-lg btn-secondary" onClick={handlePrev}>
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
        <div className="modal active" tabIndex={-1} role="dialog">
          <div className="modal-container">
            <div className="modal-header">
              <button
                className="btn btn-clear float-right"
                onClick={() => setShowModal(false)}
              ></button>
              <h5 className="modal-title text-primary">Confirmación de cita</h5>
            </div>
            <div className="modal-body">
              <p className="text-primary">
                <strong>Especialista:</strong> {specialist?.name}
              </p>
              <p>
                <strong className="text-primary">Servicios:</strong>
              </p>
              <ul>
                {services.map((s) => (
                  <li className="text-primary" key={s.id}>
                    {s.name} ({s.estimated_duration} min) - $
                    {s.price.toLocaleString("es-CO")}
                  </li>
                ))}
              </ul>
              <p className="text-primary">
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