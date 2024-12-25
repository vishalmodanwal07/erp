import { PrismaClient } from "@prisma/client/extension";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient();


 //for fetch all products
export async function GET(req : NextRequest){
    try {
        const products = await prisma.product.findMany({
            orderBy : {createdAt : 'desc'},
        });

        return NextResponse.json(products);
    } catch (error) {
        console.log(error);
        return NextResponse.json({error: "internal server error"} , {status : 500});
    }
}


//for create a new products

export async function POST(req : NextRequest) {
try {
    const {name , description , price , quantity} =await req.json();
    if(!name || !price || quantity === undefined ){
        return NextResponse.json(
            {error : 'Name , price and quantity are required'},
            {status :400}
        );
    }
    const newProduct = await prisma.product.create({
        data :{
            name , description , price : parseFloat(price) , quantity: parseInt(quantity)
        },
    });
    return NextResponse.json(newProduct , {status : 201});
} catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
}    
}