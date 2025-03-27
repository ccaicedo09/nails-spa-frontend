import React from "react";
import './styles/about/Schedule.css';

const shecdule = [
  { day: "Lunes - Viernes", hours: "9:00 AM - 8:00 PM" },
  { day: "Sábado", hours: "10:00 AM - 6:00 PM" },
  { day: "Domingo", hours: "Cerrado" }
]

const Shecdule = () => {
  return (
    <table className="table table-hover" style={{flexGrow: 1}}>
      <thead>
        <tr>
          <th>Día</th>
          <th>Horario</th>
        </tr>
      </thead>
      <tbody>
        {shecdule.map((day, index) => (
          <tr key={index}>
            <td>{day.day}</td>
            <td>{day.hours}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Shecdule;