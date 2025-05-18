import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("font-outfit font-black", className)}>
      <span className="gradient-text">TheApex</span>
      <span className="text-foreground">Dev</span>
    </div>
  );
}

export default Logo;
