import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetter(val: string) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export function rankAndOrderCategories(
  categories: string[],
  limit = 5,
): string[] {
  // Count occurrences of each category
  const countMap: Record<string, number> = categories.reduce(
    (acc, category) => {
      const lowerCategory = category.toLowerCase();
      acc[lowerCategory] = (acc[lowerCategory] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  // Sort categories by their count in descending order
  const sortedCategories: string[] = Object.keys(countMap).sort(
    (a, b) => countMap[b] - countMap[a],
  );

  // Return a unique array (Set) in the sorted order
  return Array.from(new Set(sortedCategories)).slice(0, limit);
}
