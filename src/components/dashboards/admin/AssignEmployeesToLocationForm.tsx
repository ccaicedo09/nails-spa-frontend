import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addEmployeesToLocationRequest } from "../../../api/locations";
import { User } from "../../../types/usuarios";
import { Location } from "../../../types/sedes";

const assignSchema = z.object({
  locationId: z.string().min(1, "Selecciona una sede"),
  employees: z.array(z.string()).min(1, "Selecciona al menos un empleado")
});

type AssignFormData = z.infer<typeof assignSchema>;

export default function AssignEmployeesToLocationForm({
  employees,
  locations
}: {
  employees: User[];
  locations: Location[];
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
      await addEmployeesToLocationRequest(data.locationId, data.employees);
        setTimeout(() => {
        setSuccessMessage("");
        }, 3000);
        setSuccessMessage("Empleados asignados correctamente a la sede.");
      reset();
    } catch (error) {
        alert("Error al asignar empleados a sede");
      console.error("Error al asignar empleados a sede:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">🏢 Asignar empleados a sede</h2>

      {successMessage && (
        <div className="bg-green-100 text-green-800 p-3 rounded mb-4">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700">Sede</label>
          <select
            {...register("locationId")}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Selecciona una sede --</option>
            {locations.map(loc => (
              <option key={loc._id} value={loc._id}>
                {loc.name} ({loc.address})
              </option>
            ))}
          </select>
          {errors.locationId && <p className="text-red-500 text-sm">{errors.locationId.message}</p>}
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Empleados</label>
          <div className="grid grid-cols-2 gap-2">
            {employees.map(emp => (
              <label key={emp._id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={emp._id}
                  {...register("employees")}
                  className="accent-blue-600"
                />
                <span>{emp.names}</span>
              </label>
            ))}
          </div>
          {errors.employees && <p className="text-red-500 text-sm">{errors.employees.message}</p>}
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
