import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, icon, ...props}, ref) => {
  return (
    (
      <div className="relative w-full">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full  rounded-md border border-slate-200 bg-white px-3 py-2 pl-[38px] text-sm ring-offset-white placeholder:text-neutral-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props} />
        <img src={icon} alt="" className="absolute inset-0 my-auto pl-3" />
      </div>
    )
  );
})
Input.displayName = "Input"

export { Input }


