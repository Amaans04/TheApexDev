import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GradientWrapperProps {
  children: ReactNode;
  className?: string;
  type?: "border" | "text" | "bg";
}

export function GradientWrapper({ 
  children, 
  className, 
  type = "border" 
}: GradientWrapperProps) {
  const gradientClass = 
    type === "border" ? "gradient-border" :
    type === "text" ? "gradient-text" :
    type === "bg" ? "gradient-bg" : "";

  return (
    <div className={cn(gradientClass, className)}>
      {children}
    </div>
  );
}

export default GradientWrapper;
