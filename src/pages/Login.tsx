import { LoaderCircle, Lock, Mail } from "lucide-react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { accessAccount } from "../api/auth";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { isAuthenticatedContext } from "../context/IsAuthenticatedContext";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const formSchema = z.object({
  email: z.string(),
  password: z.string().min(1, "La contraseña no puede ser vacia")
});

type FormData = z.infer<typeof formSchema>

function Login () {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setIsAuthenticated }: any = useContext(isAuthenticatedContext);

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
      
      const response = await accessAccount(data);
      toast.success(response.data.message || "Inicio de sesión exitoso!")
      setIsAuthenticated(true);
      
      // redirect
      const role = Cookies.get("role");
      if (role === "customer") {
        navigate("/citas");
      }else{
        navigate("/dashboard");
      }
    } catch (err) {
      setIsAuthenticated(false);

      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data.error || "Credenciales inválidas o error del servidor");
      } else {
        toast.error("Error desconocido al iniciar sesión");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "calc(100vh - 190px)" }} className="flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800">
          Iniciar Sesión
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
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
                placeholder="Ingresa tu email"
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
                placeholder="Ingresa tu contraseña"
                {...register("password")}
                className={`w-full rounded-lg border px-4 py-2.5 pl-10 focus:ring-2 focus:ring-blue-200 ${
                  errors.password ? "border-red-500 ring-red-200" : "border-gray-300"
                }`}
              />
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
            )}
            <div className="mt-2 text-right">
              <Link to="/code" className="text-sm text-blue-600 hover:underline">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex h-10 w-full items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-300"
          >
            {loading ? <LoaderCircle className="animate-spin" size={20} /> : "Iniciar sesión"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">¿Nuevo usuario? </span>
          <Link to="/register" className="text-sm font-medium text-blue-600 hover:underline">
            Regístrate
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login