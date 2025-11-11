import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addStaffToServiceRequest } from "../../../api/services";
import { User } from "../../../types/usuarios";
import { Service } from "../../../types/servicios";

const assignSchema = z.object({
  serviceId: z.string().min(1, "Selecciona un servicio"),
  staffCapable: z.array(z.string()).min(1, "Selecciona al menos un empleado")
});

type AssignFormData = z.infer<typeof assignSchema>;

export default function AssignMultipleEmployeesToServiceForm({
  employees,
  services
}: {
  employees: User[];
  services: Service[];
}) {
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<AssignFormData>({
    resolver: zodResolver(assignSchema)
  });

  const onSubmit = async (data: AssignFormData) => {
    try {
        console.log(data);
      await addStaffToServiceRequest(data.serviceId, data.staffCapable);
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      setSuccessMessage("Empleados asignados correctamente a servicios.");
      reset();
    } catch (error) {
        alert("Error al asignar empleados a servicios");
      console.error("Error al asignar empleados:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg mx-auto">
      <h2 className="text-xl font-bold mb-4 text-gray-800">👥 Asignar empleados a servicio</h2>

      {successMessage && (
        <div className="bg-green-100 text-green-800 p-3 rounded mb-4">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700">Servicio</label>
          <select
            {...register("serviceId")}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Selecciona un servicio --</option>
            {services.map(service => (
              <option key={service._id} value={service._id}>
                {service.name} ({service.duration} mins)
              </option>
            ))}
          </select>
          {errors.serviceId && <p className="text-red-500 text-sm">{errors.serviceId.message}</p>}
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Empleados</label>
          <div className="grid grid-cols-2 gap-2">
            {employees.map(emp => (
              <label key={emp._id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={emp._id}
                  {...register("staffCapable")}
                  className="accent-blue-600"
                />
                <span>{emp.names}</span>
              </label>
            ))}
          </div>
          {errors.staffCapable && <p className="text-red-500 text-sm">{errors.staffCapable.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold"
        >
          ✅ Asignar empleados
        </button>
      </form>
    </div>
  );
}
