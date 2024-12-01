import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetter(val: string) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export function rankAndOrderTags(tags: string[], limit = 5): string[] {
  // Count occurrences of each tag
  const countMap: Record<string, number> = tags.reduce(
    (acc, tag) => {
      const lowerTag = tag.toLowerCase();
      acc[lowerTag] = (acc[lowerTag] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  // Sort tags by their count in descending order
  const sortedTags: string[] = Object.keys(countMap).sort(
    (a, b) => countMap[b] - countMap[a],
  );

  // Return a unique array (Set) in the sorted order
  return Array.from(new Set(sortedTags)).slice(0, limit);
}
