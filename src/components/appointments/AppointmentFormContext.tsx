import React, { createContext, ReactNode, useContext, useState } from "react";
import Service from "../../types/FormTypes.interface";

interface AppointmentFormContextType {
  services: Service[];   
  setServices: React.Dispatch<React.SetStateAction<Service[]>>;
  nextStep: () => void;
  prevStep: () => void;
  currentStep: number;
}

const AppointmentFormContext = createContext<AppointmentFormContextType | undefined>(undefined);

export const useFormContext = () => {
    const context = useContext(AppointmentFormContext);
    if (!context) {
        throw new Error("useFormContext must be used within a FormProvider");
    }
    return context;
}

export const FormProvider: React.FC<{ children: ReactNode}> = ({ children }) => {
  const [services, setServices] = useState<Service[]>([]);
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => Math.max(1, prev - 1));

  return (
    <AppointmentFormContext.Provider
      value={{ services, setServices, nextStep, prevStep, currentStep }}
    >
      {children}
    </AppointmentFormContext.Provider>
  );
};

export default AppointmentFormContext;