import React from 'react'
import { useFormContext } from './AppointmentFormContext';
import FormControls from './FormControls';
import '../../components/styles/appointments/Review.css';

const Review = () => {
  const { services, specialist, totalTime, startDate, endDate } = useFormContext();

  const totalPrice = services.reduce((sum, service) => sum + service.price, 0);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("es-CO", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("es-CO", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

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

        {startDate && endDate && (
          <>
            <hr />
            <article>
              <h3 className="h6 label label-rounded label-primary">
                Fecha y hora seleccionadas:
              </h3>
              <p>
                {formatDate(startDate)} <br />
                De <strong>{formatTime(startDate)}</strong> a{" "}
                <strong>{formatTime(endDate)}</strong>
              </p>
            </article>
          </>
        )}

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