import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

const Progress = React.forwardRef(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-gray-100",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 transition-transform duration-300 ease-in-out progress-indicator"
      style={{ 
        transform: `translateX(-${100 - (value || 0)}%)`,
        background: 'hsl(var(--hb-primary))',
        backgroundImage: 'linear-gradient(90deg, hsl(var(--hb-primary)) 0%, hsl(var(--hb-primary)) 100%)',
      }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress } 