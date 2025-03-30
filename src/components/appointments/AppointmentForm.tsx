import React, { useState } from 'react';
import Services from './Services';
import { FormProvider } from './AppointmentFormContext';

const renderStep = (step: number) => {
    switch (step) {
        case 1:
            return <Services />
        default:
            return null;
    }
};

const AppointmentForm = () => {
    return (
        <FormProvider>
            <header>
                <h2>Test</h2>
            </header>
            {renderStep(1)}
        </FormProvider>
    )
}

export default AppointmentForm;