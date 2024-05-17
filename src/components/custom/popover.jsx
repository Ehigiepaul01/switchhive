import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { Button } from "@/components/ui"

const CustomPopover = ({children, icon, style, ...props }) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button size="icon" className={style} {...props}>
                   {icon}
                </Button>
            </PopoverTrigger>
            <PopoverContent className='flex flex-col gap-[1px] px-3 py-4 mt-3 bg-white border border-blue-900 rounded-lg'>
                {children}
            </PopoverContent>
        </Popover>
    )
}

export default CustomPopover