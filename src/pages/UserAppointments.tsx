import React, { useEffect, useState } from 'react'
import { getAppointmentsByUserRequest, deleteAppointmentRequest } from '../api/citas'
import { checkCredentials } from '../api/auth'
import { Appointment } from '../types/citas'
import { Loader2 } from 'lucide-react'

const UserAppointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)
  const [cancelingId, setCancelingId] = useState<string | null>(null)
  const [userId, setUserId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await checkCredentials()
        const data = (res as any).data || {}
        console.log('DEBUG UserAppointments - checkCredentials response:', data)
        let id: string | null = null
        if (data.user && data.user._id) id = data.user._id
        else if (data.userId) id = data.userId
        else if (data.id) id = data.id
        // Fallback: try common cookie names if server didn't provide id
        if (!id) {
          const cookie = document.cookie || ''
          const possible = ['userId','userid','user_id','id_user']
          for (const name of possible) {
            const m = cookie.split(';').map(c => c.trim()).find(c => c.startsWith(name + '='))
            if (m) { id = decodeURIComponent(m.split('=')[1]); break }
          }
        }
        setUserId(id)
        // Ensure loading is cleared even if id is null so the UI doesn't stay stuck
        setLoading(false)
      } catch (err) {
        console.error(err)
        setError('No se pudo verificar el usuario. Inicia sesión nuevamente.')
        setLoading(false)
      }
    }
    fetchUser()
  }, [])

  useEffect(() => {
    if (!userId) return
    const fetchAppointments = async () => {
      try {
        setLoading(true)
        const res = await getAppointmentsByUserRequest(userId)
        setAppointments((res as any).data || [])
      } catch (err) {
        console.error('getAppointments error', err)
        // If the request failed and we don't have a userId, try cookie fallback
  const status = (err as any)?.response?.status
        if (!userId) {
          const cookie = document.cookie || ''
          const possible = ['userId','userid','user_id','id_user']
          for (const name of possible) {
            const m = cookie.split(';').map(c => c.trim()).find(c => c.startsWith(name + '='))
            if (m) {
              const fallbackId = decodeURIComponent(m.split('=')[1])
              try {
                const res2 = await getAppointmentsByUserRequest(fallbackId)
                setAppointments((res2 as any).data || [])
                setUserId(fallbackId)
                setError(null)
                return
              } catch (err2) {
                console.error('fallback getAppointments failed', err2)
              }
            }
          }
        }
        // If we reached here, show error
        setError('Error al cargar tus citas.')
      } finally {
        setLoading(false)
      }
    }
    fetchAppointments()
  }, [userId])

  const handleCancel = async (appointmentId: string) => {
    try {
      if (!confirm('¿Estás seguro que quieres cancelar esta cita?')) return
      setCancelingId(appointmentId)
      await deleteAppointmentRequest(appointmentId)
  setAppointments(prev => prev.map(a => a._id === appointmentId ? { ...a, cancelled: true } : a))
    } catch (err) {
      console.error(err)
      setError('Error al cancelar la cita.')
    } finally {
      setCancelingId(null)
    }
  }

  if (loading) return (
    <div className="flex justify-center items-center h-80 text-gray-600">
      <Loader2 className="animate-spin mr-2" /> Cargando tus citas...
    </div>
  )

  if (error) return (
    <div className="text-center text-red-500 mt-10 font-medium">{error}</div>
  )

  if (appointments.length === 0) return (
    <div className="text-center mt-10 text-gray-500">No tienes citas agendadas.</div>
  )

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Mis Citas Agendadas</h1>
      <div className="space-y-4">
        {appointments.map(appt => (
          <div key={appt._id} className="border border-gray-200 rounded-xl p-4 shadow-sm flex justify-between items-center">
            <div>
              <p className="text-gray-800 font-medium">Servicio: {typeof appt.service === 'string' ? appt.service : (appt.service as any)?.name || appt.service}</p>
              <p className="text-sm text-gray-500">Fecha: {appt.schedule?.date} — {appt.schedule?.start} a {appt.schedule?.end}</p>
              <p className="text-sm text-gray-500">Lugar: {typeof appt.location === 'string' ? appt.location : (appt.location as any)?.name || appt.location}</p>
              <p className="text-sm mt-1">Estado: <span className={appt.cancelled ? 'text-red-500' : 'text-green-600'}>{appt.cancelled ? 'Cancelada' : 'Activa'}</span></p>
            </div>
            {!appt.cancelled && (
              <button disabled={cancelingId === appt._id} onClick={() => handleCancel(appt._id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm">
                {cancelingId === appt._id ? 'Cancelando...' : 'Cancelar'}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserAppointments
