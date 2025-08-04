import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:transform hover:-translate-y-1",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-royal-blue to-slate-blue text-white hover:from-slate-blue hover:to-royal-blue shadow-lg hover:shadow-xl",
        destructive: "bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl",
        outline: "border-2 border-royal-blue bg-white text-royal-blue hover:bg-gradient-to-r hover:from-royal-blue hover:to-slate-blue hover:text-white shadow-md hover:shadow-lg font-bold",
        secondary: "bg-gradient-to-r from-slate-blue to-royal-blue text-white hover:from-royal-blue hover:to-slate-blue shadow-md hover:shadow-lg",
        ghost: "text-slate-blue hover:text-royal-blue hover:bg-royal-blue/10 font-semibold",
        link: "text-royal-blue underline-offset-4 hover:underline font-semibold",
        gradient: "bg-gradient-to-r from-royal-blue via-slate-blue to-steel-blue text-white hover:from-steel-blue hover:via-slate-blue hover:to-royal-blue shadow-xl hover:shadow-2xl font-bold",
        outlineGradient: "border-2 border-royal-blue bg-white text-royal-blue hover:bg-gradient-to-r hover:from-royal-blue hover:via-slate-blue hover:to-steel-blue hover:text-white shadow-md hover:shadow-lg font-bold",
        pale: "bg-gradient-to-r from-slate-blue to-royal-blue text-white hover:from-royal-blue hover:to-slate-blue shadow-md hover:shadow-lg font-semibold",
        steel: "bg-gradient-to-r from-steel-blue to-slate-blue text-white hover:from-slate-blue hover:to-steel-blue shadow-md hover:shadow-lg",
        elegant: "bg-gradient-to-r from-slate-blue to-royal-blue text-white hover:from-royal-blue hover:to-slate-blue shadow-lg hover:shadow-xl font-semibold",
        sophisticated: "bg-gradient-to-r from-royal-blue via-slate-blue to-steel-blue text-white hover:from-steel-blue hover:via-slate-blue hover:to-royal-blue shadow-xl hover:shadow-2xl font-bold",
        professional: "bg-gradient-to-r from-slate-blue to-royal-blue text-white hover:from-royal-blue hover:to-slate-blue shadow-lg hover:shadow-xl font-bold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 py-2 text-sm",
        lg: "h-12 rounded-md px-6 py-3 text-lg",
        xl: "h-14 rounded-md px-8 py-4 text-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants } 