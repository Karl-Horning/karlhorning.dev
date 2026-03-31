import { icons } from "@/lib/constants/ui";
import { Icon } from "@/types";

const { AccessibilityIcon, CodeIcon, LocationIcon } = icons;

/**
 * Sidebar items used in the biography section.
 *
 * Each item represents a key piece of personal or professional
 * information such as location, sector experience, technical
 * skills, or focus areas.
 *
 * Items are displayed with an icon and styled consistently
 * for both light and dark themes.
 *
 * Used in the `BioSidebar` component.
 */
export const bioSidebarItems: Icon[] = [
    {
        title: "Location",
        description: "London & Portugal (remote/hybrid)",
        icon: LocationIcon,
        mainColour: "text-secondary dark:text-white",
        bgColour: "bg-blue-600/10 dark:bg-secondary",
    },
    {
        title: "Stack",
        description: "JS/TS, React/Next, Node",
        icon: CodeIcon,
        mainColour: "text-secondary dark:text-white",
        bgColour: "bg-blue-600/10 dark:bg-secondary",
    },
    {
        title: "Focus",
        description: "Accessibility & performance",
        icon: AccessibilityIcon,
        mainColour: "text-secondary dark:text-white",
        bgColour: "bg-blue-600/10 dark:bg-secondary",
    },
];
