import { Mail, Hash, LoaderCircle, Lock } from "lucide-react";
import { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import axios from "axios";
import { generateRecoveryCode, updatePassword } from "../api/recovery";
import { useNavigate } from "react-router-dom";

const passwordSchema = z
  .string()
  .min(8, "La contraseña debe tener al menos 8 caracteres.")
  .regex(/[A-Z]/, "Debe tener al menos una letra mayúscula.")
  .regex(/[0-9]/, "Debe tener al menos un número.")
  .regex(/[^A-Za-z0-9]/, "Debe tener al menos un carácter especial.");

const formSchema = z.object({
  email: z.string().email("Ingresa un email válido"),
  recoveryCode: z.string().optional(),
  newPass: passwordSchema.optional(),
});

type FormData = z.infer<typeof formSchema>;

function RecoveryCode() {
  const navigate = useNavigate();
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setFocus,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const extractErrorMessage = (err: unknown) => {
    if (axios.isAxiosError(err)) {
      return (
        err.response?.data?.error ||
        err.response?.data?.message ||
        "Error en la comunicación"
      );
    }
    return "Error inesperado";
  };

  const handleSendEmail = async () => {
    const email = getValues("email");
    if (!email) return toast.error("Ingresa un email primero");

    setLoadingEmail(true);
    try {
      const response = await generateRecoveryCode({ email });
      toast.success(response.data.message || "Código enviado");
      setEmailSent(true);
      setTimeout(() => setFocus("recoveryCode"), 200);
    } catch (err) {
      toast.error(extractErrorMessage(err));
    } finally {
      setLoadingEmail(false);
    }
  };

  const onSubmit = async (data: FormData) => {
    if (!data.recoveryCode) {
      toast.error("Debes ingresar el código de recuperación");
      return;
    }
    if (!data.newPass) {
      toast.error("Debes ingresar una nueva contraseña");
      return;
    }

    setLoadingUpdate(true);

    try {
      const response = await updatePassword({
        email: data.email,
        newPass: data.newPass,
        recoveryCode: data.recoveryCode,
      });

      toast.success(response.data.message || "Contraseña actualizada");
      navigate("/login");
    } catch (err) {
      toast.error(extractErrorMessage(err));
    } finally {
      setLoadingUpdate(false);
    }
  };

  return (
    <div style={{ minHeight: "calc(100vh - 190px)" }} className="flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800">
          Recuperar contraseña
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-500">
                <Mail size={20} />
              </span>
              <input
                type="email"
                {...register("email")}
                disabled={emailSent}
                placeholder="Ingresa tu email"
                className={`w-full rounded-lg border px-4 py-2.5 pl-10 
                ${errors.email ? "border-red-500" : "border-gray-300"}
                ${emailSent ? "bg-gray-100" : ""}`}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}

            <button
              type="button"
              onClick={handleSendEmail}
              disabled={loadingEmail || emailSent}
              className="mt-3 flex h-10 w-full items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-300"
            >
              {loadingEmail ? <LoaderCircle className="animate-spin" size={20} /> : "Enviar código"}
            </button>
          </div>

          <div className="mb-6">
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              Código de recuperación
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-500">
                <Hash size={20} />
              </span>
              <input
                type="text"
                {...register("recoveryCode")}
                disabled={!emailSent}
                placeholder="Ingresa el código recibido"
                className={`w-full rounded-lg border px-4 py-2.5 pl-10 
                ${errors.recoveryCode ? "border-red-500" : "border-gray-300"}
                ${!emailSent ? "bg-gray-100" : ""}`}
              />
            </div>
          </div>

          {/* NUEVA CONTRASEÑA */}
          <div className="mb-6">
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              Nueva contraseña
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-500">
                <Lock size={20} />
              </span>
              <input
                type="password"
                {...register("newPass")}
                disabled={!emailSent}
                placeholder="Nueva contraseña segura"
                className={`w-full rounded-lg border px-4 py-2.5 pl-10 
                ${errors.newPass ? "border-red-500" : "border-gray-300"}
                ${!emailSent ? "bg-gray-100" : ""}`}
              />
            </div>
            {errors.newPass && (
              <p className="mt-1 text-sm text-red-600">{errors.newPass.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={!emailSent || loadingUpdate}
            className="flex h-10 w-full items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-300"
          >
            {loadingUpdate ? (
              <LoaderCircle className="animate-spin" size={20} />
            ) : (
              "Actualizar contraseña"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RecoveryCode;
