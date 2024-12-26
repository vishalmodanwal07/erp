import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { getServerSession } from "next-auth/next"
import { AuthProvider } from './auth-provider'
import { Button } from '@/components/ui/button'

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
  const session = await getServerSession()

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
              <Link href="/" className="text-xl font-semibold">Mini ERP</Link>
              <ul className="flex space-x-4 items-center">
                {session ? (
                  <>
                    <li><Link href="/dashboard">Dashboard</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/sales-orders">Sales Orders</Link></li>
                    <li><Link href="/reports">Reports</Link></li>
                    <li>
                      <Link href="/api/auth/signout">
                        <Button variant="outline" size="sm">Sign out</Button>
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link href="/auth/signin">
                        <Button variant="ghost" size="sm">Log in</Button>
                      </Link>
                    </li>
                    <li>
                      <Link href="/auth/signup">
                        <Button size="sm">Sign up</Button>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </nav>
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  )
}

