import { MixerHorizontalIcon } from "@radix-ui/react-icons"
import { Button, DatePickerWithRange } from "../ui"
import { CustomSelect } from "../custom"


const AnalyticsTableHeader = () => {
    return (
        <div className="flex items-center justify-between mt-7">
            <h5 className="text-black text-xl font-medium font-['Poppins'] leading-[30px]">Most Ordered Products</h5>
            <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" className="border-2 border-slate-300">
                    <MixerHorizontalIcon className="h-[18px] w-[18px]" />
                </Button>
                <Button size="icon" >
                  By Country
                </Button>
                <CustomSelect placeholder="By Stores" options={['one', 'two']} className="w-auto p-2 font-medium text-white transition-colors bg-blue-900 hover:bg-blue-900/90" />
                <DatePickerWithRange className="border-grey hover:bg-blue-900 hover:text-white" size="icon" />
            </div>
        </div>
    )
}

export default AnalyticsTableHeader