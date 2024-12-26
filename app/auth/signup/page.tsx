"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">Create an account</h1>
        <Button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full flex items-center justify-center mb-4"
        >
          <svg className="w-4 h-4 mr-2" aria-hidden="true" viewBox="0 0 24 24">
            <path
              d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
            />
          </svg>
          Sign up with Google
        </Button>
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-blue-500 hover:text-blue-600">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}

