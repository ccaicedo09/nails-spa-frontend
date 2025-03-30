import React, { useState } from 'react';
import Services from './Services';
import { useFormContext } from './AppointmentFormContext';

const renderStep = (step: number) => {
    switch (step) {
        case 1:
            return <Services />
        case 2:
            return <div>Seleccionar una fecha</div>
        case 3:
            return <div>Confirmar cita</div>
        default:
            return null;
    }
};

const AppointmentForm = () => {
    const { currentStep } = useFormContext();
    return (
        <>
            {renderStep(currentStep)}
        </>
    )
}

export default AppointmentForm;