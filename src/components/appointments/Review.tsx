import React from 'react'
import { useFormContext } from './AppointmentFormContext';
import FormControls from './FormControls';
import '../../components/styles/appointments/Review.css';

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
  const { services, specialist } = useFormContext();

  const totalPrice = services.reduce((sum, service) => sum + service.price, 0);

  return (
    <>
      <div className="review-container">
        <FormControls />

        <hr />

        <article>
          <h3 className="h4 text-primary">Neiva, Huila</h3>
          <span style={{ display: "block", marginTop: "-0.8rem" }}>
            Carrera 7 #25-40
          </span>
        </article>

        <hr />

        {specialist && (
          <>
            <article>
              <h3 className="h6 label label-rounded label-primary">
                Reserva a cargo de:
              </h3>
              <span style={{ display: "block", fontWeight: "bold" }}>
                {specialist.name}
              </span>
            </article>

            <hr />
          </>
        )}

        <article>
          {services.length === 0 ? (
            <p>No has seleccionado ningún servicio.</p>
          ) : (
            <>
              <h3 className="h6 label label-rounded label-primary">
                Servicios seleccionados:
              </h3>
              <ul className="selected-services">
                {services.map((service) => (
                  <li key={service.id} className="service-item">
                    <div className="service-header">
                      <h4 className="h5">{service.name}</h4>
                      <p className="service-price">
                        $ {service.price.toLocaleString("es-CO")}
                      </p>
                    </div>
                    <p className="service-duration">
                      {service.estimated_duration} min
                    </p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </article>

        <div className="total-price-container">
          <p>Total</p>
          <p> $ {totalPrice.toLocaleString("es-CO")}</p>
        </div>
      </div>
    </>
  );
}

export default Review;