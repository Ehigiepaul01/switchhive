import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blue-900 text-white hover:bg-blue-900/90",
        destructive:
          " border border-red-500 text-center text-red-500 bg-white  hover:bg-slate-100",
        icon: "p-2 bg-neutral-100 hover:bg-neutral-200",
        outline:
          "bg-white border-2 border-blue-900 text-blue-900 hover:bg-slate-100",
        ghost: "hover:bg-slate-100 hover:text-slate-900",
        grey: "bg-neutral-100 hover:bg-slate-100 hover:text-slate-900 text-zinc-500",
        link: "text-slate-900 underline-offset-4 hover:underline",
      },
      size: {
        default: "px-[18px] py-3 text-lg",
        sm: "px-[18px] py-3 text-sm",
        xs: "p-2 text-xs",
        icon: "p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, children, variant, size, asChild = false, isLoading, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={isLoading}
      ref={ref}
      {...props}>
        {isLoading ? "Loading..." : children}
      </Comp>)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
