import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Container = forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(function Container({ className, children, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn("max-w-8xl tablet:px-14 mx-auto w-full px-6", className)}
      {...props}
    >
      {children}
    </div>
  );
});

export default Container;
