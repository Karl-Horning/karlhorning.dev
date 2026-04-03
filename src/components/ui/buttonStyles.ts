import { twMerge } from "tailwind-merge";

export type ButtonType = "primary" | "secondary";

const base =
    "rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

const variants: Record<ButtonType, string> = {
    primary: "bg-primary text-white shadow-sm hover:brightness-105",
    secondary:
        "border border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800",
};

export function getButtonClasses(
    type: ButtonType = "primary",
    additional?: string
) {
    return twMerge(base, variants[type], additional);
}
