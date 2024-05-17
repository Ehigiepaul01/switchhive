import React from 'react'
import { search } from "@/assets/icons"
import { Input, Button } from "@/components/ui"
import { TextAlignJustifyIcon, PlusIcon } from '@radix-ui/react-icons'
import { CustomPopover, CustomSelect } from '../custom'
import { useState } from 'react'


const RewardIconsHeader = () => {
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
                    Deselect All
                    <PlusIcon className="ml-2 h-[18px] w-[18px]" />
                </Button>
                <Button variant="outline" size="sm">
                    Filter by Country
                    <PlusIcon className="ml-2 h-[18px] w-[18px]" />
                </Button>
            </div>
        </div>
    )
}

export default RewardIconsHeader