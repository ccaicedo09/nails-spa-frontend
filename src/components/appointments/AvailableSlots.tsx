import React, { useEffect, useState } from 'react'
import supabase from '../../utils/supabaseClient'

const fetchAvailableSlots = async (specialistId: string, date: string, duration: number) => {
    const { data, error } = await supabase
        .rpc('get_available_slots', {
            specialist_id: specialistId,
            day: date,
            required_duration: duration
        });
    
    if (error) {
        console.error('Error fetching slots:', error);
        return [];
    }

    return data;
}

const AvailableSlots = ({ specialistId, selectedDate, duration }) => {
    const [slots, setSlots] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!specialistId || !selectedDate || !duration) return;

        setLoading(true);
        fetchAvailableSlots(specialistId, selectedDate, duration)
            .then(setSlots)
            .finally(() => setLoading(false));
    }, [specialistId, selectedDate, duration]);

    if (loading) return <div>Cargando...</div>;

    return (
      <div className="grid grid-cols-3 gap-2">
        {slots.length === 0 ? (
          <p>No hay horarios disponibles.</p>
        ) : (
          slots.map(({ slot }) => (
            <button key={slot} className="p-2 bg-blue-100 rounded">
              {new Date(slot).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </button>
          ))
        )}
      </div>
    );
}

export default AvailableSlots