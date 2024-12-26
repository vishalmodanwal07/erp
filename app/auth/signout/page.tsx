"use client"

import { signOut } from "next-auth/react"
import { useEffect } from "react"

export default function SignOut() {
  useEffect(() => {
    signOut({ callbackUrl: "/" })
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <p>Signing out...</p>
    </div>
  )
}

