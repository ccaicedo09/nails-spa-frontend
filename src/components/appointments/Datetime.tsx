import React, { useEffect, useState } from 'react'
import { useFormContext } from './AppointmentFormContext'

const Datetime = () => {
  const { startDate, setStartDate, endDate, setEndDate, totalTime } =
    useFormContext();

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [availableSlots, setAvailableSlots] = useState<
    { start: Date; end: Date }[]
  >([]);
  const [selectedSlotIndex, setSelectedSlotIndex] = useState<number | null>(
    null
  );

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("es-CO", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  useEffect(() => {
    if (!totalTime || !selectedDate) return;

    const slots: { start: Date; end: Date }[] = [];
    const startTime = 9;
    const endTime = 17;
    const stepMinutes = 30;

    const startOfDay = new Date(selectedDate);
    startOfDay.setHours(startTime, 0, 0, 0);

    const endOfDay = new Date(selectedDate);
    endOfDay.setHours(endTime, 0, 0, 0);

    let current = new Date(startOfDay);

    while (true) {
      const slotEnd = new Date(current.getTime() + totalTime * 60 * 1000);
      if (slotEnd > endOfDay) break;

      slots.push({ start: new Date(current), end: new Date(slotEnd) });
      current = new Date(current.getTime() + stepMinutes * 60000);
    }

    setAvailableSlots(slots);
    setSelectedSlotIndex(null); // Reset selection if date changes
    setStartDate(null);
    setEndDate(null);
  }, [totalTime, selectedDate]);

  const handleSlotSelect = (index: number) => {
    const slot = availableSlots[index];
    setSelectedSlotIndex(index);
    setStartDate(slot.start);
    setEndDate(slot.end);
  };

  return (
    <div>
      <h3 className="h6 text-center font-semibold mb-2">
        Selecciona la fecha y hora de tu reserva
      </h3>

      <input
        type="date"
        value={selectedDate ? selectedDate.toISOString().split("T")[0] : ""}
        min={new Date().toISOString().split("T")[0]}
        onChange={(e) => {
          if (e.target.value) {
            const [year, month, day] = e.target.value.split("-").map(Number);
            const localDate = new Date(year, month - 1, day);
            setSelectedDate(localDate);
          } else {
            setSelectedDate(null);
          }
        }}
        className="border p-2 rounded my-2"
      />

      <h4 className="font-medium mb-2">Horarios disponibles:</h4>

      <div className="columns">
        {availableSlots.map((slot, index) => (
          <div className="column col-4" key={index}>
            <div
              className={`card card-custom p-2 ${
                selectedSlotIndex === index ? "card-custom-selected" : ""
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => handleSlotSelect(index)}
            >
              <div className="card-body text-center">
                {`${formatTime(slot.start)} a ${formatTime(slot.end)}`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Datetime;