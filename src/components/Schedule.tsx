import React from "react";
import './styles/about/Schedule.css';

const schedule = [
  { day: "Lunes - Viernes", hours: "9:00 AM - 8:00 PM" },
  { day: "Sábado", hours: "10:00 AM - 6:00 PM" },
  { day: "Domingo", hours: "Cerrado" }
]

const Schedule = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8" style={{flexGrow: 1}}>
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Horarios de Atención</h3>
      <div className="space-y-4">
        {schedule.map((day, index) => (
          <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
              <span className="font-semibold text-gray-800">{day.day}</span>
            </div>
            <span className={`font-medium ${day.hours === 'Cerrado' ? 'text-red-500' : 'text-green-600'}`}>
              {day.hours}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-600 text-sm">¡Reserva tu cita con anticipación!</p>
        <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors">
          Reservar Cita
        </button>
      </div>
    </div>
  );
}

export default Schedule;