import React from 'react'
import { useFormContext } from './AppointmentFormContext';

const exampleData = {
  specialist: "Nathalia Ávila Borrero",
  startDate: "2025-03-29T10:00:00"
};

// const totalPrice = exampleData.selectedServices.reduce(
//   (sum, service) => sum + service.price,
//   0
// );

// const totalTime = exampleData.selectedServices.reduce(
//   (sum, service) => sum + service.estimated_duration,
//   0
// );

// const startDate = new Date(exampleData.startDate);
// const endDate = new Date(startDate.getTime() + totalTime * 60000);

const Review = () => {
  const { nextStep, prevStep, services } = useFormContext();
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
        <button className="btn btn-lg btn-secondary" onClick={prevStep}>
          ← Anterior
        </button>
        <button className="btn btn-lg btn-primary" onClick={nextStep}>
          Continuar →
        </button>
      </div>

      <hr />

      <article>
        <h3 className="h4 text-primary">Neiva, Huila</h3>
        <span style={{ display: "block", marginTop: "-0.8rem" }}>
          Carrera 7 #25-40
        </span>
      </article>

      <hr />

      <article>
        <h3 className="h6 label label-rounded label-primary">
          Reserva a cargo de:
        </h3>
        <span style={{ display: "block" }}>{exampleData.specialist}</span>
      </article>

      <hr />

      <article>
        {services.length === 0 ? (
          <p>No has seleccionado ningún servicio.</p>
        ) : (
          <ul>
            {services.map((service) => (
              <li key={service.id}>
                <h4>{service.name}</h4>
                <p>{service.description}</p>
                <p>
                  <strong>Precio:</strong> ${service.price}
                </p>
              </li>
            ))}
          </ul>
        )}
      </article>
    </>
  );
}

export default Review;