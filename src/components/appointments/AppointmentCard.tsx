import React from "react";
import { PopulatedAppointment } from "../../types/citas";

type Props = {
  appointment: PopulatedAppointment;
  deletingId: string | null;
  onDelete: (appointmentId: string) => Promise<void> | void;
};

const AppointmentCard: React.FC<Props> = ({ appointment, deletingId, onDelete }) => {
  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month-1, day);
    return date.toLocaleDateString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (time: string) => time;

  const isPastAppointment = (date: string, endTime: string) => {
    const appointmentDateTime = new Date(`${date}T${endTime}`);
    return appointmentDateTime < new Date();
  };

  const isPast = isPastAppointment(appointment.schedule.date, appointment.schedule.end);
  const isCancelled = appointment.cancelled;

  return (
    <div
      className={
        `bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 border border-pink-100 hover:-translate-y-1.5 hover:shadow-xl ` +
        (isCancelled ? "opacity-60 border-red-200 " : "") +
        (isPast && !isCancelled ? "opacity-70 border-gray-200 " : "")
      }
    >
      <div className="px-6 py-4 bg-pink-50 border-b border-pink-100">
        {isCancelled ? (
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide bg-red-500 text-white">Cancelada</span>
        ) : isPast ? (
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide bg-gray-400 text-white">Realizada</span>
        ) : (
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide bg-pink-600 text-white">Próxima</span>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-pink-100">
          <h3 className="text-xl text-gray-800 m-0 font-bold">{appointment.service.name}</h3>
          <p className="text-2xl text-pink-600 font-bold m-0">${appointment.service.price}</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3 text-gray-600 text-[0.95rem] leading-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 mt-[2px] text-pink-600"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>{formatDate(appointment.schedule.date)}</span>
          </div>

          <div className="flex items-start gap-3 text-gray-600 text-[0.95rem] leading-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 mt-[2px] text-pink-600"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>
              {formatTime(appointment.schedule.start)} - {formatTime(appointment.schedule.end)}
            </span>
          </div>

          {appointment.employee && (
            <div className="flex items-start gap-3 text-gray-600 text-[0.95rem] leading-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0 mt-[2px] text-pink-600"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>{appointment.employee.names}</span>
            </div>
          )}

          <div className="flex items-start gap-3 text-gray-600 text-[0.95rem] leading-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 mt-[2px] text-pink-600"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-gray-800">{appointment.location.name}</span>
              <span className="text-sm text-gray-500">{appointment.location.address}</span>
            </div>
          </div>

          {appointment.additionalDescription && (
            <div className="flex items-start gap-3 text-gray-600 text-[0.95rem] leading-6 p-4 bg-pink-50 rounded-xl mt-2 border border-pink-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0 mt-[2px] text-pink-600"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <span className="italic text-gray-600">{appointment.additionalDescription}</span>
            </div>
          )}
        </div>
      </div>

      <div className="px-6 py-4 bg-gray-50 flex justify-center gap-4 border-t border-gray-100">
        {!isPast && !isCancelled && (
          <button
            onClick={() => onDelete(appointment._id)}
            disabled={deletingId === appointment._id}
            className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-red-600 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {deletingId === appointment._id ? (
              <>
                <span className="inline-block w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                Cancelando...
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0"
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
                Cancelar cita
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default AppointmentCard;
