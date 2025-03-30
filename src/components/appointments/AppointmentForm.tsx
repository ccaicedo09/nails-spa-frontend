import React, { useState } from 'react';
import Services from './Services';
import { useFormContext } from './AppointmentFormContext';
import Specialists from './Specialists';

const renderStep = (step: number) => {
    switch (step) {
        case 1:
            return <Services />
        case 2:
            return <Specialists />
        case 3:
            return <div>Seleccionar fecha</div>
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