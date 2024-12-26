import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart3, Package, ShoppingCart } from 'lucide-react'
import { useSession } from "next-auth/react"

export default function Dashboard() {
  const { data: session, status } = useSession(); 
  
  if (!session) {
    redirect('/auth/signin?callbackUrl=/dashboard')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Package className="mr-2 h-6 w-6" />
              Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Manage your product inventory</CardDescription>
            <Link href="/products" className="mt-4 inline-block">
              <Button>View Products</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ShoppingCart className="mr-2 h-6 w-6" />
              Sales Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Create and manage sales orders</CardDescription>
            <Link href="/sales-orders" className="mt-4 inline-block">
              <Button>View Sales Orders</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="mr-2 h-6 w-6" />
              Reports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Generate and view reports</CardDescription>
            <Link href="/reports" className="mt-4 inline-block">
              <Button>View Reports</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

