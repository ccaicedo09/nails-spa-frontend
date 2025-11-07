import { LoaderCircle, Lock, Mail, Phone, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createCustomer } from "../api/auth";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(1, "Por favor ingresa tu nombre completo."),
  phone: z
    .string()
    .regex(/^3\d{9}$/, "Ingresa un número celular colombiano válido."),
  email: z.string().email("Por favor ingresa un email válido."),
  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres.")
    .regex(/[A-Z]/, "Debe tener al menos una letra mayúscula.")
    .regex(/[0-9]/, "Debe tener al menos un número.")
    .regex(/[^A-Za-z0-9]/, "Debe tener al menos un carácter especial."),
});

type FormData = z.infer<typeof formSchema>;

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const response = await createCustomer({
        names: data.name,
        phone: data.phone,
        email: data.email,
        password: data.password,
      });

      toast.success(response.data.message || "Registro exitoso!");
      navigate("/login");
    } catch (err: any) {
      console.error("Error al registrar usuario:", err);
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data.error || "Error del servidor al registrar");
      } else {
        toast.error("Error desconocido al registrar");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "calc(100vh - 190px)" }} className="flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800">
          Registro de Usuario
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
              Nombre completo
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-500">
                <User size={20} />
              </span>
              <input
                id="name"
                type="text"
                placeholder="Tu nombre completo"
                {...register("name")}
                className={`w-full rounded-lg border px-4 py-2.5 pl-10 focus:ring-2 focus:ring-blue-200 ${
                  errors.name ? "border-red-500 ring-red-200" : "border-gray-300"
                }`}
              />
            </div>
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
              Celular
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-500">
                <Phone size={20} />
              </span>
              <input
                id="phone"
                type="tel"
                placeholder="Ej: 3001234567"
                {...register("phone")}
                className={`w-full rounded-lg border px-4 py-2.5 pl-10 focus:ring-2 focus:ring-blue-200 ${
                  errors.phone ? "border-red-500 ring-red-200" : "border-gray-300"
                }`}
              />
            </div>
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-500">
                <Mail size={20} />
              </span>
              <input
                id="email"
                type="email"
                placeholder="Tu correo electrónico"
                {...register("email")}
                className={`w-full rounded-lg border px-4 py-2.5 pl-10 focus:ring-2 focus:ring-blue-200 ${
                  errors.email ? "border-red-500 ring-red-200" : "border-gray-300"
                }`}
              />
            </div>
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-500">
                <Lock size={20} />
              </span>
              <input
                id="password"
                type="password"
                placeholder="Crea una contraseña segura"
                {...register("password")}
                className={`w-full rounded-lg border px-4 py-2.5 pl-10 focus:ring-2 focus:ring-blue-200 ${
                  errors.password ? "border-red-500 ring-red-200" : "border-gray-300"
                }`}
              />
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex h-10 w-full items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-300"
          >
            {loading ? <LoaderCircle className="animate-spin" size={20} /> : "Registrarse"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">¿Ya tienes cuenta? </span>
          <Link to="/login" className="text-sm font-medium text-blue-600 hover:underline">
            Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register