import { useEffect, useState } from 'react'

type AuthState = 'loading' | 'authenticated' | 'unauthenticated'

export function useAuth() {
  const [auth, setAuth] = useState<AuthState>('loading')
  const [role, setRole] = useState<string | null>(null)

  useEffect(() => {
    fetch('http://localhost:4000/api/v1/auth/check', {
      method: 'GET',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        if (data.authenticated) {
          setAuth('authenticated')
          setRole(data.role || null)
        } else {
          setAuth('unauthenticated')
        }
      })
      .catch(() => setAuth('unauthenticated'))
  }, [])

  return { auth, role }
}