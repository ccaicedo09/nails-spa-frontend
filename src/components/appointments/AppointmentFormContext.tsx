import React, { createContext, ReactNode, useContext, useState } from "react";
import Service from "../../types/FormTypes.interface";

interface AppointmentFormContextType {
    services: Service | null;   
    setServices: React.Dispatch<React.SetStateAction<Service | null>>;
    nextStep: () => void;
    prevStep: () => void;
}

const AppointmentFormContext = createContext<AppointmentFormContextType | undefined>(undefined);

export const useFormContext = () => {
    const context = useContext(AppointmentFormContext);
    if (!context) {
        throw new Error("useFormContext must be used within a FormProvider");
    }
    return context;
}

interface FormProviderProps {
    children: ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [services, setServices] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1)); // Evita que vaya a 0 o negativo
  };

  return (
    <AppointmentFormContext.Provider value={{ services, setServices, nextStep, prevStep }}>
      {children}
    </AppointmentFormContext.Provider>
  );
};

export default AppointmentFormContext;