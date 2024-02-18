import { useState, useEffect } from 'react'
import { localStorage } from '@/app/storage'

export default function useIsLogin() {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    if (typeof window != undefined && localStorage.getItem('token')) {
      setIsLogin(true)
    }
  }, [isLogin])

  const setLogout = () => {
    localStorage.removeItem('token')
    setIsLogin(false)
  }

  return { isLogin, setLogout }
}
