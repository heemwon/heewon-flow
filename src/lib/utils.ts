import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// class 우선순위 보장
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
