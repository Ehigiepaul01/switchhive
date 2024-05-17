import React from 'react'
import { search } from "@/assets/icons"
import { Input, Button } from "@/components/ui"
import { TextAlignJustifyIcon, PlusIcon } from '@radix-ui/react-icons'
import { CustomPopover, CustomSelect } from '../custom'
import { useState } from 'react'


const BlockIconsHeader = () => {
    const [selectedValue, setSelectedValue] = useState(null);

    const handleSelect = (value) => {
        setSelectedValue(value);
    };
    return (
        <div className='flex items-center my-2'>
            <Input type="text" icon={search} placeholder="Search" className="border-gray-200 w-[60%]" />
            <div className='flex items-center gap-3 ml-auto'>
                <CustomSelect placeholder="Select All" options={['one', 'two']} onSelect={handleSelect} />
                <Button variant="outline" size="sm">
                    Add Icon
                    <PlusIcon className="ml-2 h-[18px] w-[18px]" />
                </Button>
                <CustomPopover icon={<TextAlignJustifyIcon className="h-[18px] w-[18px]" />}>
                    <Button size="xs" variant="ghost" className="justify-start px-2 py-1 rounded-sm">View</Button>
                    <Button size="xs" variant="ghost" className="justify-start px-2 py-1 rounded-sm">Edit</Button>
                    <Button size="xs" variant="ghost" className="justify-start px-2 py-1 rounded-sm">Remove</Button>
                </CustomPopover>
            </div>
        </div>
    )
}

export default BlockIconsHeader