import { cn } from "@/lib/utils";
import React from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { Label } from "@radix-ui/react-label";


export default function CustomCheckbox({
    name,
    icon,
    label,
    className,
    labelStyle,
    checked,
    onChange,
    value,
    ...props
}) {
    return (
        <div className="flex items-center justify-end gap-4 relative">
            <input
                {...props}
                className="sr-only"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                checked={checked}
                type="checkbox"
            />
            {<CheckIcon onClick={onChange}
                className={cn(
                    "w-4 h-4 border-[1.5px] text-white border-gray-400 rounded flex flex-col justify-center items-center cursor-pointer relative transition-all duration-300 ease-in-out m-auto",
                    checked ? "bg-blue-900 border-blue-900" : " border-gray-400",
                    className
                )} 
            />}
            {
                label && (<Label
                    htmlFor={name}
                    className={cn(
                        "text-[22px] font-medium leading-relaxed mt-6 block mb-3",
                        labelStyle
                    )}
                >
                    {label}
                </Label>)
            }
        </div>
    );
}