import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client/extension';

const prisma = new PrismaClient();


 // Fetch a single product by ID
export async function GET(req : NextRequest, { params }: { params: { id: string } }) {
  try {
    // Get the product ID from the URL
    const { id } = params; 
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    
    return NextResponse.json(product);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

 // Update product by ID
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Get the product ID from the URL
    const { id } = params; 
    const { name, description, price, quantity } = await req.json();

    if (!name && !description && price === undefined && quantity === undefined) {
      return NextResponse.json({ error: 'At least one field is required to update.' }, { status: 400 });
    }
   const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        name,
        description,
        price: price !== undefined ? parseFloat(price) : undefined,
        quantity: quantity !== undefined ? parseInt(quantity) : undefined,
      },
    });

    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}


// Delete product by ID
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Get the product ID from the URL
    const { id } = params; 

    await prisma.product.delete({ where: { id } });
    return NextResponse.json({}, { status: 204 }); // No content response
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
