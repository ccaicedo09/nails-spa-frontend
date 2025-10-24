import { LoaderCircle, Lock, Mail } from "lucide-react"
import { ChangeEvent, FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login () {
  const navigate = useNavigate()
  const [user, setUser] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
    setErrors({ ...errors, [name]: '' })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    let newErrors = { email: '', password: '' }

    if (!user.email.trim()) newErrors.email = 'Por favor ingresa un email válido.'
    if (!user.password.trim()) newErrors.password = 'La contraseña no puede estar vacía.'

    if (newErrors.email || newErrors.password) {
      setErrors(newErrors)
      return
    }

    setLoading(true)

    try {
      const response = await fetch('http://localhost:4000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(user)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al iniciar sesión')
      }

      alert(data.message || 'Inicio de sesión exitoso!')
      navigate('/private')
    } catch (error: any) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: 'calc(100vh - 190px)' }} className="flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">Email</label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-500"><Mail size={20} /></span>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Ingresa tu email"
                value={user.email}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-2.5 pl-10 focus:ring-2 focus:ring-blue-200 ${
                  errors.email ? 'border-red-500 ring-red-200' : 'border-gray-300'
                }`}
              />
            </div>
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-gray-700">Contraseña</label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-500"><Lock size={20} /></span>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                value={user.password}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-2.5 pl-10 focus:ring-2 focus:ring-blue-200 ${
                  errors.password ? 'border-red-500 ring-red-200' : 'border-gray-300'
                }`}
              />
            </div>
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
            <div className="mt-2 text-right">
              <a href="#" className="text-sm text-blue-600 hover:underline">¿Olvidaste tu contraseña?</a>
            </div>
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={loading}
            className="flex h-10 w-full items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-300"
          >
            {loading ? <LoaderCircle className="animate-spin" size={20} /> : 'Iniciar sesión'}
          </button>
        </form>

        {/* Registro */}
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">¿Nuevo usuario? </span>
          <Link to="/register" className="text-sm font-medium text-blue-600 hover:underline">Regístrate</Link>
        </div>
      </div>
    </div>
  )
}

export default Login