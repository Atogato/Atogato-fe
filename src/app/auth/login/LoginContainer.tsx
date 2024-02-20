'use client'

import useIsLogin from '@/hooks/auth/useIsLogin'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
export default function LoginContainer({ children }: { children: JSX.Element | JSX.Element[] }) {
  const { isLogin } = useIsLogin()
  const router = useRouter()

  useEffect(() => {
    if (isLogin) {
      router.replace('/project/list')
    }
  }, [isLogin])
  return <div className="relative flex flex-col items-center gap-10 pt-24">{children}</div>
}
