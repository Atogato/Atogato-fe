import { useState, useEffect } from 'react'
import { localStorage } from '@/app/storage'
import { useSearchParams } from 'next/navigation'

export default function useIsLogin() {
  const [token, setToken] = useState<string | null>(null)
  const params = useSearchParams()

  useEffect(() => {
    if (typeof window !== undefined) {
      setToken(localStorage.getItem('token'))
    }
  }, [params])

  const Logout = () => {
    localStorage.removeItem('token')
    setToken(null)
  }

  return { isLogin: token !== null, Logout }
}
