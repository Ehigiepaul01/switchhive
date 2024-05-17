import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import lodash from "lodash";
import { EyeOpenIcon, EyeNoneIcon, CheckIcon } from "@radix-ui/react-icons";
import { Label } from "@radix-ui/react-label";
import edit from "@/assets/icons/edit.svg"


export default function Input({
    name,
    icon,
    textField,
    label,
    control,
    register,
    errors,
    type = "text",
    className,
    labelStyle,
    ...props
}) {
    const error_message = lodash.get(errors, name);
    const hasError = !!errors && error_message;

    const [show, setShow] = useState(false);
    const isCheckbox = type === "checkbox";
    const isPassword = type === "password";
    const isFile = type === "file";
    const isEditIcon = icon === "edit";

    return (
        <div className={` ${type == 'checkbox' && 'flex flex-row-reverse items-center justify-end gap-4'} relative`}>
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

            <div className={`relative`}>
                {
                    isCheckbox ? (
                        <Controller
                            control={control}
                            name={name}
                            render={({ field: { onChange, value=false, onBlur } }) => (
                                <>
                                    <input
                                        {...props}
                                        className="sr-only"
                                        id={name}
                                        value={value}
                                        onBlur={onBlur}
                                        onChange={() => onChange(!value)}
                                        checked={value}
                                        type="checkbox"
                                    />
                                    <div
                                        onClick={() => onChange(!value)}
                                        className={cn(
                                            "w-6 h-6 border-2 border-blue-900 rounded-md cursor-pointer relative",
                                            value ? "bg-blue-900" : "bg-white",
                                            className
                                        )}
                                    >
                                        {<CheckIcon className={cn(
                                            "w-5 h-5 text-blue-900 absolute top-[1px] left-[1px]",
                                            value && 'text-white'
                                        )} />}
                                    </div>
                                </>
                            )}
                        />
                    ) :
                        isFile ? (
                            <input
                                type="file"
                                name={name}
                                id={name}
                                {...register("image")}
                                className={cn(
                                    "text-base bg-white rounded-lg border border-zinc-400 focus:outline-none font-semibold leading-normal text-blue-900 px-[50px] py-[23px] h-auto w-auto",
                                    className
                                )}
                            />
                        ) :
                            textField ? (
                                <Controller
                                    control={control}
                                    name={name}
                                    render={({ field: { onChange, value, onBlur } }) => (
                                        <textarea
                                            {...props}
                                            value={value}
                                            id={name}
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            className={cn(
                                                "px-6 min-h-[122px] text-sm w-full pt-6 bg-white rounded-lg border border-zinc-400 focus:outline-none",
                                                className
                                            )}
                                        />
                                    )}
                                />
                            ) : (
                                <Controller
                                    control={control}
                                    name={name}
                                    render={({ field: { onChange, value, onBlur } }) => (
                                        <input
                                            {...props}
                                            value={value || ''}
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            id={name}
                                            className={cn(
                                                "px-6 h-[55px] text-sm w-full  bg-white rounded-lg border border-zinc-400 focus:outline-none",
                                                hasError && "border-red-500 border",
                                                className
                                            )}
                                            type={show ? "text" : type}
                                        />
                                    )}
                                />

                            )
                }
                {isPassword && (
                    <div
                        onClick={() => setShow(!show)}
                        className="absolute top-0 right-0 flex items-center h-full px-6 text-xl cursor-pointer text-slate-600"
                    >
                        {show ? <EyeOpenIcon /> : <EyeNoneIcon />}
                    </div>
                )}
                {isEditIcon && (
                    <div
                        className="absolute flex items-start h-full text-xl cursor-pointer top-2 right-2 text-slate-600"
                    >
                         <img src={edit} alt="edit icon" className="contrast-0 " />
                    </div>
                )}
            </div>

            {hasError && (
                <p className="px-3 mt-1 text-xs font-medium text-red-500">
                    {error_message?.message}
                </p>
            )}
        </div>
    );
}