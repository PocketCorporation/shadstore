import React from 'react'
import { Input } from './input'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function ProductsFilter() {
    return (
        <div className='flex justify-between'>
            <div>
                <Input placeholder='Search' className='w-full' />
            </div>

            <div>
                <Select >
                    <SelectTrigger className="w-[180px]">

                        <SelectValue placeholder="Per Page" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="10">10</SelectItem>
                            <SelectItem value="20">20</SelectItem>
                            <SelectItem value="30">30</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

        </div>
    )
}
