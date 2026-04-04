import Link from "next/link";

/**
 * Props for the TopicChips component.
 */
interface TopicChipsProps {
    /**
     * The label shown inside the chip (rendered with a leading '#').
     */
    title: string;

    /**
     * The destination URL for the tag page.
     */
    link: string;

    /**
     * Optional additional classes to customise spacing or layout (default: "").
     */
    className?: string;
}

/**
 * Renders a single topic chip that links to its tag page.
 *
 * Appears as `#<title>` inside a rounded pill. Useful for
 * quick navigation to a tag/collection page.
 *
 * @param props - Component properties.
 * @param props.title - The label shown inside the chip (rendered with a leading '#').
 * @param props.link - The destination URL for the tag page.
 * @param props.className - Optional additional classes to customise spacing or layout (default: "").
 * @returns A flex container with one clickable topic chip linking to the tag page.
 */
export default function TopicChips({
    title,
    link,
    className = "",
}: TopicChipsProps) {
    return (
        <li
            className={`flex flex-wrap gap-2 text-xs${className ? ` ${className}` : ""}`}
        >
            <Link
                href={link}
                className="rounded-full bg-blue-300/10 px-3 py-1 text-blue-700 transition hover:bg-blue-400/10 dark:bg-blue-200/10 dark:text-sky-300 dark:hover:bg-blue-200/20"
            >
                #{title}
            </Link>
        </li>
    );
}
