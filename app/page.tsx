import React from 'react'


import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { getProducts } from '@/server/products'
import ProductCard from '@/components/ui/product-card'

export default async function Page() {
    const products = await getProducts()
    return (
        <main className='flex flex-col gap-10 justify-center max-w-6xl mx-auto'>
            <h1>Awesome Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {products.map((product)=>(
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </main>


    )
}


