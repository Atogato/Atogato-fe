'use client'

import { ReactNode } from 'react'

export default function LinkButton({
  socialType,
  children,
}: {
  socialType: string
  children?: ReactNode | ReactNode[]
}) {
  const oauth_uri = process.env.BACKEND_OAUTH_URL + `${socialType}?redirect_uri=${process.env.OAUTH_REDIRECT_URL}`
  return (
    <a href={oauth_uri} className="h-fit w-full">
      {children}
    </a>
  )
}
