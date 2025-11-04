import React from "react";
import './styles/about/Schedule.css';

const schedule = [
  { day: "Lunes - Viernes", hours: "9:00 AM - 8:00 PM", icon: "📅" },
  { day: "Sábado", hours: "10:00 AM - 6:00 PM", icon: "🌞" },
  { day: "Domingo", hours: "Cerrado", icon: "🔒" }
]

const Schedule = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8" style={{flexGrow: 1, minWidth: 300}}>
      <div className="text-center mb-6">
        <div className="inline-block bg-blue-500 rounded-2xl p-3 mb-3 shadow-md">
          <span className="text-3xl">🕐</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-800">Horarios de Atención</h3>
      </div>
      
      <div className="space-y-3">
        {schedule.map((item, index) => (
          <div 
            key={index} 
            className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-300 border border-gray-200"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{item.icon}</span>
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
      
      <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
        <p className="text-gray-700 text-sm text-center mb-3 font-medium">
          ✨ ¡Reserva tu cita con anticipación!
        </p>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-md">
          Agendar Cita
        </button>
      </div>
    </div>
  );
}

export default Schedule;