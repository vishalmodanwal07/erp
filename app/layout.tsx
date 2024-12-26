

import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { getServerSession } from "next-auth/next"

import { Button } from '@/components/ui/button'

import { Providers } from './provider'
import { useSession } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mini ERP System',
  description: 'A simple ERP system for product management',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={inter.className}>
          <main>
          <Providers>
            {children}
          </Providers>
          </main>
          
      </body>
    </html>
  )
}

