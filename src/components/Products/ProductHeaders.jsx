import { useState } from "react"
import { CustomPopover, CustomSelect } from "@/components/custom";
import { Button, Input } from "@/components/ui";
import { search } from "@/assets/icons/index"
import { MixerHorizontalIcon, TextAlignJustifyIcon } from "@radix-ui/react-icons";


export const StoreHeader = () => {
    const [selectedValue, setSelectedValue] = useState(null);

    const handleSelect = (value) => {
        setSelectedValue(value);
    };
    return (
        <div className='flex items-center gap-2 justify-between'>
            <Input type="text" icon={search} placeholder="Search" className="border-gray-200 max-w-80 min-w-40" />
            <div className='flex items-center gap-3'>
                <CustomSelect placeholder="Select Pages" options={['All Pages', 'Page 1', 'Page 2']} onSelect={handleSelect} className={`w-[140px]`} />
                <CustomSelect placeholder="Select All" options={['one', 'two']} onSelect={handleSelect} />
                <CustomSelect placeholder="Add  commission" options={['one', 'two']} onSelect={handleSelect} className={`w-40`} />
                <Button variant="outline" size="sm">
                    <MixerHorizontalIcon className="mr-2 h-[18px] w-[18px]" />
                    Filter by country
                </Button>
                <CustomPopover icon={<TextAlignJustifyIcon className="h-[18px] w-[18px]" />} variant="icon">
                    <Button size="xs" variant="ghost" className="justify-start px-2 py-1 rounded-sm">Select All</Button>
                    <Button size="xs" variant="ghost" className="justify-start px-2 py-1 rounded-sm">Edit</Button>
                </CustomPopover>
            </div>
        </div>
    )
}


export const WebsiteHeader = () => {
    const [selectedValue, setSelectedValue] = useState(null);

    const handleSelect = (value) => {
        setSelectedValue(value);
    };
    return (
        <div className='flex items-center gap-2 justify-between'>
            <Input type="text" icon={search} placeholder="Search" className="border-gray-200 max-w-80 min-w-40" />
            <div className='flex items-center gap-3'>
                <CustomSelect placeholder="Select Pages" options={['All Pages', 'Page 1', 'Page 2']} onSelect={handleSelect} className={`w-36`} />
                <CustomSelect placeholder="Select All" options={['one', 'two']} onSelect={handleSelect} />
                <Button variant="outline" size="sm">
                    <MixerHorizontalIcon className="mr-2 h-[18px] w-[18px]" />
                    Filter by country
                </Button>
                <CustomPopover icon={<TextAlignJustifyIcon className="h-[18px] w-[18px]" />} variant="icon">
                    <Button size="xs" variant="ghost" className="justify-start px-2 py-1 rounded-sm">View</Button>
                    <Button size="xs" variant="ghost" className="justify-start px-2 py-1 rounded-sm">Out of stock</Button>
                    <Button size="xs" variant="ghost" className="justify-start px-2 py-1 rounded-sm">Remove</Button>
                </CustomPopover>
            </div>
        </div>
    )
}