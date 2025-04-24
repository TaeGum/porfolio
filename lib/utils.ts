import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * 여러 Tailwind CSS 클래스를 조건부로 병합해주는 함수
 * 사용 예: className={cn("px-4", isActive && "bg-primary")}
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
