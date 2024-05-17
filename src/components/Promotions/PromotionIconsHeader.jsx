import { ArrowDown, Trash2 } from "lucide-react";
import { CustomSelect } from "../custom";
import { Button } from "../ui";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const PromotionIconsHeader = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelect = (value) => {
        setSelectedValue(value);
    };
    return (
        <div className="flex justify-between items-center mt-8">
            <h2 className="font-semibold text-lg">Our Promotions</h2>
            <div className='flex items-center gap-3 ml-auto'>
                <CustomSelect placeholder="Select All" options={['one', 'two']} onSelect={handleSelect} />
                <Button variant="outline" size="sm">
                    Deselect All
                    <ArrowDown className="ml-2 h-[18px] w-[18px]" />
                </Button>
                <Button variant="outline" size="sm">
                    <MixerHorizontalIcon className="mr-2 h-[18px] w-[18px]" />
                    Filter by Country
                </Button>
                <Button variant="outline" size="sm">
                    <Trash2 className="h-[18px] w-[18px]" />
                </Button>
            </div>
        </div>
    )
}
export default PromotionIconsHeader