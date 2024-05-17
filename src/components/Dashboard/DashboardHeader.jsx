import { DownloadIcon } from "@radix-ui/react-icons"
import { Button } from "../ui"
import { CustomPopover } from "../custom"
import { DatePickerWithRange } from "../ui/DatePickerWithRange"

const DashboardHeader = () => {
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-3xl font-medium leading-9 text-black">Good day Smith👋</h1>
            <div className="flex items-center gap-2">
                <DatePickerWithRange className="border-grey hover:bg-blue-900 hover:text-white" />
                <CustomPopover icon={<DownloadIcon className="h-[24px] w-[24px]" />} variant="outline" style="hover:bg-blue-900 hover:text-white p-2">
                    <Button size="xs" variant="ghost" className="justify-start px-2 py-1 rounded-sm">Export as CSV</Button>
                    <Button size="xs" variant="ghost" className="justify-start px-2 py-1 rounded-sm">Export as PNG</Button>
                    <Button size="xs" variant="ghost" className="justify-start px-2 py-1 rounded-sm">Export as PDF</Button>
                    <Button size="xs" variant="ghost" className="justify-start px-2 py-1 rounded-sm">Export as XLS</Button>
                </CustomPopover>
            </div>
        </div>
    )
}

export default DashboardHeader