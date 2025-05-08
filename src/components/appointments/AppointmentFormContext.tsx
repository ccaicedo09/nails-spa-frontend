import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Service, Specialist } from "../../types/FormTypes.interface";

interface AppointmentFormContextType {
  services: Service[];   
  setServices: React.Dispatch<React.SetStateAction<Service[]>>;
  specialist: Specialist | null;
  setSpecialist: React.Dispatch<React.SetStateAction<Specialist | null>>;
  date: Date | null;
  setDate: React.Dispatch<React.SetStateAction<Date | null>>;
  totalTime: number;
  setTotalTime: React.Dispatch<React.SetStateAction<number>>;
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
  const [specialist, setSpecialist] = useState<Specialist | null>(null);
  const [date, setDate] = useState<Date | null>(null);
  const [totalTime, setTotalTime] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const calculatedTotalTime = services.reduce(
      (sum, service) => sum + service.estimated_duration,
      0
    );
    setTotalTime(calculatedTotalTime);
  }, [services]);

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => {
    setCurrentStep((prev) => {
      if (prev === 2) {
        setSpecialist(null);
      }
      return Math.max(1, prev - 1);
    });
  };

  return (
    <AppointmentFormContext.Provider
      value={{ services, setServices, specialist, setSpecialist, date, setDate, totalTime, setTotalTime, nextStep, prevStep, currentStep }}
    >
      {children}
    </AppointmentFormContext.Provider>
  );
};

export default AppointmentFormContext;