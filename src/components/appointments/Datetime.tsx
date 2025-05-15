import React, { useEffect, useState } from 'react'
import { useFormContext } from './AppointmentFormContext'
import supabase from '../../utils/supabaseClient'

const BUSINESS_HOURS = {
    start: 9,
    end: 20,
}

const Datetime = () => {

    const { date, setDate, totalTime, setTotalTime } = useFormContext();
    const [availableTimes, setAvailableTimes] = useState<Date[]>([]);

    useEffect(() => {
        if (date) {
            fetchAvailableTimes();
        }
    }, [date]);

    const fetchAvailableTimes = async () => {
        const startOfDay = new Date(date || new Date());
        startOfDay.setHours(BUSINESS_HOURS.start, 0, 0, 0);

        const endOfDay = new Date(date || new Date());
        endOfDay.setHours(BUSINESS_HOURS.end, 0, 0, 0);

        const { data: appointments, error } = await supabase
            .from("appointments")
            .select("date, duration")
            .gte("date", startOfDay.toISOString())
            .lt("date", endOfDay.toISOString());
        
        if (error) {
            console.error("Error fetching appointments:", error);
            return;
        }

        const availableSlots = generateAvailableSlots(
            appointments,
            startOfDay,
            endOfDay,
            totalTime
        );
        setAvailableTimes(availableSlots);
    }

    

    const generateAvailableSlots = (
        appointments,
        startOfDay,
        endOfDay,
        duration
    ) => {
        const slots: Date[] = [];
        let currentTime = new Date(startOfDay);

        while (currentTime < endOfDay) {
            const slotEndTime = new Date(currentTime);
            slotEndTime.setMinutes(currentTime.getMinutes() + duration);

            const isConflict = appointments.some(({ date, duration }) => {
                const appointmentStart = new Date(date);
                const appointmentEnd = new Date(appointmentStart);
                appointmentEnd.setMinutes(appointmentStart.getMinutes() + duration);

                return (
                    (currentTime >= appointmentStart && currentTime < appointmentEnd) ||
                    (slotEndTime > appointmentStart && slotEndTime <= appointmentEnd)
                );
            });

            if (!isConflict) {
                slots.push(new Date(currentTime));
            }

            currentTime.setMinutes(currentTime.getMinutes() + 30); // Incrementar por 30 min (ajustable)
        }

        return slots;
    };

    return (
        <div>
            <h3>Selecciona la fecha y hora de tu reserva</h3>
            <input
                type="date"
                value={date ? date.toISOString().split('T')[0] : ''}
                onChange={(e) => setDate(e.target.value ? new Date(e.target.value) : null)}
            />

            <h4>Horarios disponibles:</h4>
            <ul>
                {availableTimes.map((time, index) => (
                    <li key={index} style={{cursor:"pointer"}}>{time.toLocaleTimeString()}</li>
                ))}
            </ul>
        </div>
    );
};

export default Datetime;