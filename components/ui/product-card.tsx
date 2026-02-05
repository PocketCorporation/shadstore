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
import { Button } from './button'
import { Badge, ShoppingCartIcon } from 'lucide-react'

interface ProductCardProps {
    product: Product
}
export default function ProductCard({ product }: ProductCardProps) {
    // const imageUrl = product.images[0].startsWith("http") 
    //     ? product.images[0]
    //     : `https://i.imgur.com/${product.images[0]}`
    return (
        <div>
            <Card key={product.id} className='p-0 flex flex-col justify-between'>
                <CardHeader className="p-0 relative">
                    <div className='absolute top-0 left-2'>{product.category.name}</div>
                    <Image
                        src={product.images[0]}
                        alt={product.title}
                        width={300}
                        height={300}
                        className='w-full h-full rounded-t-lg object-cover'
                    />
                    <div className='absolute top-0 left-2'>{product.category.name}</div>
                    <div className="p-6">
                        <CardTitle>{product.title}</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className='text-xl font-bold'>${product.price}</p>
                    <CardDescription>{product.description.slice(0,80)}...</CardDescription>
                </CardContent>
                <CardFooter className='flex justify-end p-4'>
                    <Button >
                        <ShoppingCartIcon className='size-4' />
                          Add to Cart                
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
