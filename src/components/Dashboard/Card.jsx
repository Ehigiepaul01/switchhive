import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { Button } from "../ui";

const Card = ({ metric, value, percentage, update, trend, icons }) => {
    return (
        <div className="p-2 bg-white rounded-lg border border-neutral-200">
            <div className="flex gap-2 items-center mb-3">
                <Button size="icon" >
                    <img src={icons} alt="icon" />
                </Button>
                <p className="text-zinc-400 text-sm font-light leading-tight">
                    {metric}
                </p>
            </div>
            <div className="flex gap-1 items-center">
                <p className="text-stone-950 text-2xl font-medium leading-loose">
                    {value}
                </p>
                <div
                    className={`${trend == "rising" ? "text-green-500" : "text-red-500"
                        } text-xs font-medium leading-tight flex gap-1 items-center`}
                >
                    {trend == "rising" ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    {percentage}
                </div>
            </div>
            <div className="w-full border border-zinc-400 border-opacity-50 my-2" />
            <p className="text-zinc-400 text-xs font-light leading-none">
                Update: {update}
            </p>
        </div>
    );
};

export default Card;
