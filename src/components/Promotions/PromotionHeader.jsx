import Title from "../Title"
import { search } from "@/assets/icons"
import { Button, Input } from "@/components/ui"
import { PlusIcon } from "@radix-ui/react-icons"
import { useNavigate } from "react-router-dom"

const PromotionHeader = () => {
    const navigate = useNavigate();

    return (
        <>
            <Title>Promotions</Title>
            <div className="flex justify-between items-center pt-6">
                <Input type="text" icon={search} placeholder="Search" className="border-gray-200 w-[60%]" />
                <Button onClick={()=>{navigate('/promotions/create-promotions')}}>
                    <PlusIcon className="mr-2 h-[18px] w-[18px]" />
                    Create New Promotion</Button>
            </div>
        </>
    )
}
export default PromotionHeader