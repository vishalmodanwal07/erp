import { getServerSession } from "next-auth/next"
import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { redirect } from 'next/navigation'

const prisma = new PrismaClient()

export default async function ProductList() {
  const session = await getServerSession()
  if (!session) {
    redirect('/auth/signin?callbackUrl=/products')
  }

  const products = await prisma.product.findMany()

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <Link href="/products/new">
        <Button>Add New Product</Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Quantity: {product.quantity}</p>
            <Link href={`/products/${product.id}`}>
              <Button variant="outline" className="mt-2">View Details</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

