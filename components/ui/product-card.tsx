import React from 'react'
import { Product } from '../shared/types'


import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'

interface ProductCardProps {
    product: Product
}
export default function ProductCard({ product }: ProductCardProps) {
    // const imageUrl = product.images[0].startsWith("http") 
    //     ? product.images[0]
    //     : `https://i.imgur.com/${product.images[0]}`
    return (
        <div>
            <Card key={product.id} className='p-0'>
                <CardHeader className="p-0">
                    <Image
                        src={product.images[0]}
                        alt={product.title}
                        width={300}
                        height={300}
                        className='w-full h-full rounded-t-lg object-cover'
                    />
                    <div className="p-4">
                        <CardTitle>{product.title}</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <CardDescription>{product.description}</CardDescription>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </div>
    )
}
