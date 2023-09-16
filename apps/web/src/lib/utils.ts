import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const normalizeName = (name: string) => {
    const nameParts = name.split(" ");
    const capitalizedName = nameParts
        .map(namePart => {
            return namePart.charAt(0).toUpperCase() + namePart.slice(1).toLowerCase();
        })
        .join(" ");
    return capitalizedName;
};
