import React from 'react'
import { search } from "@/assets/icons"
import { Input, Button } from "@/components/ui"
import { MixerHorizontalIcon, PlusIcon } from '@radix-ui/react-icons'

const OrdersHeader = () => {
    return (
        <div className='flex items-center my-2'>
            <Input type="text" icon={search} placeholder="Search" className="border-gray-200 w-[90%]" />
            <div className='flex items-center ml-auto gap-3'>
                <Button size="sm">By Country</Button>
                <Button size="sm">By Store</Button>
                <Button size="sm">By Payment Method</Button>
                <Button size="sm">Resolved</Button>
                <Button size="sm">Pending</Button>
                <Button size="sm">By User Type</Button>
                <Button variant="outline" size="sm">
                    <MixerHorizontalIcon className="mr-2 h-[18px] w-[18px]" />
                    Filter
                </Button>
            </div>
        </div>
    )
}

export default OrdersHeader