// Tailwind CSS constants for consistent styling across the application
export const NAVBAR_STYLES = {
  container: "flex flex-row justify-center gap-4 p-5 items-center mx-20 text-white",
  activeItem: "bg-gray-300 rounded-full px-4 py-2 text-black transition-all duration-300 ease-in-out"
} as const;

export const body = NAVBAR_STYLES.container;
export const isActiveItem = NAVBAR_STYLES.activeItem;