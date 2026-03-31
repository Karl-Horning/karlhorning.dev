import { icons } from "@/lib/constants/ui";
import { Icon } from "@/types";

const { AccessibilityIcon, ApiIcon, HigherEducationIcon, PerformanceIcon } =
    icons;

/**
 * Predefined highlight icons representing key technical and professional skills.
 *
 * Each highlight includes:
 * - A human-readable title
 * - A short description
 * - An associated SVG icon component
 * - Tailwind CSS classes for text and background colours
 *
 * These icons are rendered in the `Highlights` component to display
 * a responsive grid of skill cards on the homepage.
 *
 * @remarks
 * The colour classes support both light and dark modes, using Tailwind's
 * `dark:` variants for dynamic theming.
 */
export const HighlightIcons: Icon[] = [
    {
        title: "Accessibility-first",
        description: "WCAG-aware design, keyboard and screen-reader friendly.",
        icon: AccessibilityIcon,
        bgColour: "bg-primary/10 dark:bg-primary",
        mainColour: "text-primary dark:text-white",
    },
    {
        title: "API-driven",
        description: "REST/GraphQL, typed clients, tests and docs.",
        icon: ApiIcon,
        bgColour: "bg-blue-600/10 dark:bg-secondary",
        mainColour: "text-secondary dark:text-white",
    },
    {
        title: "EdTech expertise",
        description: "LTI/SCORM integrations, institutional APIs, and HE-scale deployment.",
        icon: HigherEducationIcon,
        bgColour: "bg-purple-800/10 dark:bg-purple-800",
        mainColour: "text-purple-800 dark:text-white",
    },
    {
        title: "Performance & DX",
        description: "Vite/Next.js, sensible tooling, CI and quality gates.",
        icon: PerformanceIcon,
        bgColour: "bg-orange-600/10 dark:bg-orange-600",
        mainColour: "text-orange-600 dark:text-white",
    },
];
