import { LoaderCircle, Lock, Mail, Phone, User } from "lucide-react"
import { ChangeEvent, FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Register () {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
    setErrors({ ...errors, [name]: '' })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    let newErrors = { name: '', phone: '', email: '', password: '' }

    if (!user.name.trim()) newErrors.name = 'Por favor ingresa tu nombre completo.'
    if (!/^3\d{9}$/.test(user.phone)) newErrors.phone = 'Ingresa un número celular colombiano válido.'
    if (!user.email.trim()) newErrors.email = 'Por favor ingresa un email válido.'
    if (!user.password.trim()) newErrors.password = 'La contraseña no puede estar vacía.'

    if (Object.values(newErrors).some(error => error)) {
      setErrors(newErrors)
      return
    }

    setLoading(true)

    try {
      const response = await fetch('http://localhost:4000/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          names: user.name,
          phone: user.phone,
          email: user.email,
          password: user.password
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al registrar el usuario')
      }

      alert(data.message || 'Registro exitoso!')
      navigate('/login')
    } catch (error: any) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: 'calc(100vh - 190px)' }} className="flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800">Registro de Usuario</h2>
        <form onSubmit={handleSubmit}>
          {/* Nombre */}
          <div className="mb-6">
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">Nombre completo</label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-500"><User size={20} /></span>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Tu nombre completo"
                value={user.name}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-2.5 pl-10 focus:ring-2 focus:ring-blue-200 ${
                  errors.name ? 'border-red-500 ring-red-200' : 'border-gray-300'
                }`}
              />
            </div>
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          {/* Teléfono */}
          <div className="mb-6">
            <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">Celular</label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-500"><Phone size={20} /></span>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Ej: 3001234567"
                value={user.phone}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-2.5 pl-10 focus:ring-2 focus:ring-blue-200 ${
                  errors.phone ? 'border-red-500 ring-red-200' : 'border-gray-300'
                }`}
              />
            </div>
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">Email</label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-500"><Mail size={20} /></span>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Tu correo electrónico"
                value={user.email}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-2.5 pl-10 focus:ring-2 focus:ring-blue-200 ${
                  errors.email ? 'border-red-500 ring-red-200' : 'border-gray-300'
                }`}
              />
            </div>
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          {/* Contraseña */}
          <div className="mb-6">
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-gray-700">Contraseña</label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-500"><Lock size={20} /></span>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Crea una contraseña"
                value={user.password}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-2.5 pl-10 focus:ring-2 focus:ring-blue-200 ${
                  errors.password ? 'border-red-500 ring-red-200' : 'border-gray-300'
                }`}
              />
            </div>
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={loading}
            className="flex h-10 w-full items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-300"
          >
            {loading ? <LoaderCircle className="animate-spin" size={20} /> : 'Registrarse'}
          </button>
        </form>

        {/* Ir a login */}
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">¿Ya tienes cuenta? </span>
          <Link to="/login" className="text-sm font-medium text-blue-600 hover:underline">Inicia sesión</Link>
        </div>
      </div>
    </div>
  )
}

export default Register