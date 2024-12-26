import Link from 'next/link'
import { getServerSession } from "next-auth/next"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, BarChart3, Package, ShoppingCart } from 'lucide-react'

export default async function LandingPage() {
  const session = await getServerSession()

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Welcome to Mini ERP System</h1>
          <p className="text-xl text-gray-600 mb-8">Streamline your business operations with our powerful and intuitive ERP solution</p>
          {session ? (
            <Link href="/dashboard">
              <Button size="lg">
                Go to Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          ) : (
            <div className="space-x-4">
              <Link href="/auth/signin">
                <Button size="lg" variant="outline">Log In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button size="lg">Sign Up</Button>
              </Link>
            </div>
          )}
        </header>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="mr-2 h-6 w-6" />
                Product Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Easily manage your product inventory, track stock levels, and update product information.</CardDescription>
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
              <CardDescription>Create and manage sales orders, track customer information, and monitor order status.</CardDescription>
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
              <CardDescription>Generate insightful reports on sales performance, inventory levels, and more.</CardDescription>
            </CardContent>
          </Card>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
          <p className="text-gray-600 mb-8">Join thousands of businesses already using our Mini ERP System</p>
          {!session && (
            <Link href="/auth/signup">
              <Button size="lg">
                Sign Up Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          )}
        </section>
      </div>
    </div>
  )
}

