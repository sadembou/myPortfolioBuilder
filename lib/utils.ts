import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type contactFormType = {
  title:string,
  titlePlaceholder:string,
  nameTitle:string,
  namePlaceholder:string,
  emailTitle:string,
  emailPlaceholder:string,
  messageTitle:string,
  messagePlaceholder:string,
  success:string,
  failure:string
}