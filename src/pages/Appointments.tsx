import React from 'react'
import AppointmentForm from '../components/appointments/AppointmentForm'
import Review from '../components/appointments/Review'
import './styles/Appointments.css'
import { FormProvider } from '../components/appointments/AppointmentFormContext'

const Appointments = () => {
  return (
    <FormProvider>
      <div className="mx-auto max-w-7xl px-4 appointments-container my-2">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-6 md:grid-cols-12">
          <aside className="text-center appointment-review md:col-span-5">
            <Review />
          </aside>
          <section className="appointment-form md:col-span-7">
            <AppointmentForm />
          </section>
        </div>
      </div>
    </FormProvider>
  );
}

export default Appointments;