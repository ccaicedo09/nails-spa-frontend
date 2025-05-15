import React from 'react'
import AppointmentForm from '../components/appointments/AppointmentForm'
import Review from '../components/appointments/Review'
import './styles/Appointments.css'
import { FormProvider } from '../components/appointments/AppointmentFormContext'

const Appointments = () => {
  return (
    <FormProvider>
      <div className="container appointments-container my-2">
        <div className="columns hide-sm hide-md hide-xs">
          <aside className="text-center appointment-review column col-5">
            <Review />
          </aside>
          <section className="appointment-form column col-7">
            <AppointmentForm />
          </section>
        </div>
      </div>
    </FormProvider>
  );
}

export default Appointments;