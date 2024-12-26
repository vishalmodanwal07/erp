import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const prisma = new PrismaClient()

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const product = await prisma.product.findUnique({
    where: { id: params.id },
  })

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Quantity: {product.quantity}</p>
      <div className="mt-4">
        <Link href={`/products/${product.id}/edit`}>
          <Button className="mr-2">Edit</Button>
        </Link>
        <Link href="/products">
          <Button variant="outline">Back to List</Button>
        </Link>
      </div>
    </div>
  )
}

