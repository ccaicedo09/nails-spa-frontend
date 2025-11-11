import React, { useEffect } from 'react'
import { getAllCustomersRequest } from '../../../api/users';
import { User } from '../../../types/usuarios';
import { getAllLocationsRequest } from '../../../api/locations';
import { Location } from "../../../types/sedes";
import CreateEmployeeForm from './CreateEmployeeForm';
import { getAllEmployeesRequest } from '../../../api/employees';
import { getAllServicesRequest } from '../../../api/services';
import { Service } from '../../../types/servicios';
import AssignServiceToEmployeeForm from './AssignServiceToEmployeeForm';
import AssignEmployeesToLocationForm from './AssignEmployeesToLocationForm';

const AdminDashboard = () => {
    const [employees, setEmployees] = React.useState<User[]>([]);
    const [locations, setLocations] = React.useState<Location[]>([]);
    const [services, setServices] = React.useState<Service[]>([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            const data = await getAllEmployeesRequest();
            setEmployees(data.data.employees);
           // console.log(data);
        }
        const fetchLocations = async () => {
            const data = await getAllLocationsRequest();
            setLocations(data.data.locations);
            // console.log(data);
        }
        const fetchServices = async () => {
            const data = await getAllServicesRequest();
            setServices(data.data.services);
            console.log(data);
        }
        fetchEmployees();
        fetchLocations();
        fetchServices();
    }, []);

  return (
    <div className='grid gap-6 sm:grid-cols-1 xl:grid-cols-2 h-[]'>
    
    <section className="rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Gestión de empleados</h3>
          
          <CreateEmployeeForm locations={locations} />

          <div>
            
          <AssignServiceToEmployeeForm employees={employees} services={services} />
          </div>
        </section>
        <section className="rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Gestión de sedes</h3>
          <AssignEmployeesToLocationForm employees={employees} locations={locations} />
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Asignar gerentes a sedes</h4>
              Proximamente...
          </div>
          
        </section>
    </div>
  )
}

export default AdminDashboard