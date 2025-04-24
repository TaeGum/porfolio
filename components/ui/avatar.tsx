import * as React from "react";
import { cn } from "@/lib/utils";

export function Avatar({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("relative flex h-16 w-16 items-center justify-center rounded-full bg-muted", className)} {...props} />;
}
export function AvatarImage({ src, alt }: { src: string; alt?: string }) {
  return <img className="h-full w-full rounded-full object-cover" src={src} alt={alt} />;
}
export function AvatarFallback({ children }: { children: React.ReactNode }) {
  return <span className="text-xl font-bold">{children}</span>;
}
