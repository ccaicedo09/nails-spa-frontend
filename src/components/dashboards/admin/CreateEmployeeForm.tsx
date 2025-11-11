import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { saveEmployeeRequest } from "../../../api/employees";
import { Location } from "../../../types/sedes";

const employeeSchema = z.object({
  names: z.string().min(2, "Nombre requerido"),
  email: z.string().email("Correo inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
  salary: z.number().min(0, "Debe ser positivo").optional(),
  phone: z.string().regex(/^3\d{9}$/, "Teléfono colombiano inválido"),
  locations: z.array(z.string()).min(1, "Selecciona al menos una sede")
});

type EmployeeFormData = z.infer<typeof employeeSchema>;

export default function CreateEmployeeForm({ locations }: { locations: Location[] }) {
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<EmployeeFormData>({
    resolver: zodResolver(employeeSchema)
  });

  const onSubmit = async (data: EmployeeFormData) => {
    try {
      await saveEmployeeRequest(data);
    setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      setSuccessMessage("Empleado creado correctamente.");
      reset();
    } catch (error) {
        alert("Error al guardar empleado");
      console.error("Error al guardar empleado:", error);
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 mx-auto">
      <h2 className="text-xl font-bold mb-4 text-gray-800">📋 Crear nuevo empleado</h2>

      {successMessage && (
        <div className="bg-green-100 text-green-800 p-3 rounded mb-4">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700">Nombre completo</label>
          <input
            {...register("names")}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.names && <p className="text-red-500 text-sm">{errors.names.message}</p>}
        </div>

        <div>
          <label className="block font-medium text-gray-700">Correo electrónico</label>
          <input
            {...register("email")}
            type="email"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block font-medium text-gray-700">Contraseña</label>
          <input
            {...register("password")}
            type="password"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <div>
          <label className="block font-medium text-gray-700">Salario (opcional)</label>
          <input
            {...register("salary", { valueAsNumber: true })}
            type="number"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.salary && <p className="text-red-500 text-sm">{errors.salary.message}</p>}
        </div>

        <div>
          <label className="block font-medium text-gray-700">Teléfono</label>
          <input
            {...register("phone")}
            placeholder="Ej: 3001234567"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Sedes asignadas</label>
          <div className="grid grid-cols-2 gap-2">
            {locations.map(loc => (
              <label key={loc._id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={loc._id}
                  {...register("locations")}
                  className="accent-blue-600"
                />
                <span>{loc.name}</span>
              </label>
            ))}
          </div>
          {errors.locations && <p className="text-red-500 text-sm">{errors.locations.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold"
        >
          ✅ Registrar empleado
        </button>
      </form>
    </div>
  );
}
