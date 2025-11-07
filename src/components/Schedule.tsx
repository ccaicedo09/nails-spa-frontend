import React from "react";
import './styles/about/Schedule.css';
import { CalendarIcon, SunIcon, LockIcon, ClockIcon } from "./icons";

const schedule = [
  { day: "Lunes - Viernes", hours: "9:00 AM - 8:00 PM" },
  { day: "Sábado", hours: "10:00 AM - 6:00 PM" },
  { day: "Domingo", hours: "Cerrado" }
]

const Schedule = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8" style={{flexGrow: 1, minWidth: 300}}>
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center bg-pink-600 rounded-2xl p-3 mb-3 shadow-md">
          <ClockIcon className="text-white" size={24} />
        </div>
        <h3 className="text-2xl font-bold text-gray-800">Horarios de Atención</h3>
      </div>
      
      <div className="space-y-3">
        {schedule.map((item, index) => (
          <div 
            key={index} 
            className="flex justify-between items-center p-4 bg-pink-50 rounded-xl hover:bg-pink-100 transition-all duration-300 border border-pink-200"
          >
            <div className="flex items-center gap-3">
              {item.day.includes('Sábado') ? (
                <SunIcon className="text-pink-600" />
              ) : item.hours === 'Cerrado' ? (
                <LockIcon className="text-pink-600" />
              ) : (
                <CalendarIcon className="text-pink-600" />
              )}
              <span className="font-semibold text-gray-800">{item.day}</span>
            </div>
            <span className={`font-semibold px-3 py-1 rounded-full text-sm ${
              item.hours === 'Cerrado' 
                ? 'bg-red-100 text-red-600' 
                : 'bg-green-100 text-green-600'
            }`}>
              {item.hours}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-pink-50 rounded-xl border border-pink-200">
        <p className="text-gray-700 text-sm text-center mb-3 font-medium">
          ✨ ¡Reserva tu cita con anticipación!
        </p>
        <a href="/citas" className="block w-full bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-md text-center">
          Agendar Cita
        </a>
      </div>
    </div>
  );
}

export default Schedule;