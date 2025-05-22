import { useState } from "react";
import { useFormContext } from "../components/appointments/AppointmentFormContext";
import { useNavigate } from "react-router-dom";

export const useAppointmentNavigation = () => {
    const {
        currentStep,
        nextStep,
        prevStep,
        services,
        specialist,
        startDate,
        endDate,
        setServices,
        setSpecialist,
        setStartDate,
        setEndDate,
        setTotalTime,
        setCurrentStep,
    } = useFormContext();
    
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    
    const handleNext = () => {
        let isValid = false;
    
        switch (currentStep) {
            case 1:
                isValid = services.length > 0;
                if (!isValid) alert("Por favor selecciona al menos un servicio.");
                break;
            case 2:
                isValid = specialist !== null;
                if (!isValid) alert("Por favor selecciona un especialista.");
                break;
            case 3:
                isValid = startDate !== null && endDate !== null;
                if (!isValid) alert("Por favor selecciona una fecha y hora válida.");
                break;
            default:
                isValid = true;
        }
    
        if (isValid) nextStep();
    };
    
    const handlePrev = () => {
        if (currentStep > 1) prevStep();
    };
    
    const handleConfirm = () => {
        if (!startDate || !endDate) {
            alert("Selecciona una fecha y hora válidas antes de confirmar.");
            return;
        }
    
        setShowModal(true);
    };
    
    const handleReset = () => {
        setServices([]);
        setSpecialist(null);
        setStartDate(null);
        setEndDate(null);
        setTotalTime(0);
        setShowModal(false);
        setCurrentStep(1);
    };
    
    const handleGoHome = () => {
        navigate("/");
    };
    
    return {
        currentStep,
        startDate,
        endDate,
        specialist,
        services,
        showModal,
        setShowModal,
        handleNext,
        handlePrev,
        handleConfirm,
        handleReset,
        handleGoHome,
    };
};