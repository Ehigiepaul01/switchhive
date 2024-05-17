import { blogsArray } from "@/constants/data"
import { CalendarDaysIcon, Timer, Trash2 } from "lucide-react"

const PromotionCard = () => {
    return (
        <div className="grid grid-cols-3 gap-6 w-full">
            {
                blogsArray.map((user, index) => (
                    <div key={index}>
                        <img src={user.image} alt="" className="w-full"/>
                        <div className="bg-neutral-200 p-4 h-[220px] rounded-b-lg">
                            <h5 className="text-sm text-stone-500">By {user.author}</h5>
                            <h2 className="font-semibold pb-2">{user.title}</h2>
                            <p className="text-sm text-neutral-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ex enim natus dolorum modi dicta!</p>
                            <div className="flex justify-between pt-4">
                                <div className="flex gap-1 items-center">
                                    <CalendarDaysIcon className="w-[14px] h-[14px]" />
                                    <h5 className="text-[12px]">{user.date}</h5>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <Timer className="w-[14px] h-[14px]" />
                                    <h5 className="text-[12px]">5 Mins to read</h5>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <Trash2 className="w-[14px] h-[14px]" />
                                    <h5 className="text-[12px]">Delete</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default PromotionCard