import { ReactNode } from "react";
import ButtonLink from "./ButtonLink";
import { externalLinks, icons } from "@/lib/constants/ui";
import { decorateIcon } from "@/lib/helpers";
import TopicChipsList from "./TopicChipsList";

const { CalendarIcon, ClockIcon, CoffeeIcon } = icons;
const { KofiLink } = externalLinks;

interface EntryHeaderProps {
    /**
     * The main title text displayed prominently at the top of the header.
     */
    title: string;

    /**
     * An optional short description or introductory paragraph
     * displayed below the title.
     */
    description?: string;

    /**
     * The date the entry was published or last updated.
     * Accepts an ISO 8601 string or a JavaScript Date object.
     */
    date?: string;

    /**
     * The estimated reading time for the entry, expressed in minutes
     * (for example, `4` → "4 min read").
     */
    readingTime?: number;

    /**
     * A list of related topics or tags displayed as pills
     * (for example, `["Next.js", "GraphQL"]`).
     */
    topics?: string[];

    /**
     * Whether to include a Ko-fi button by default.
     * Defaults to `true`.
     */
    includeKofiButton?: boolean;

    /**
     * A custom Ko-fi link to override the default global Ko-fi URL.
     */
    kofiHref?: string;

    /**
     * Custom action elements displayed in place of or alongside
     * the Ko-fi button. Accepts any valid React node.
     */
    actions?: ReactNode;

    /**
     * Optional additional Tailwind CSS classes applied to the
     * outer `<section>` wrapper.
     */
    className?: string;
}

/**
 * Displays a reusable entry header section containing a title, optional description,
 * publication date, reading time, topic tags, and action buttons.
 *
 * Commonly used for blog posts, project pages, and CMALT sections to provide
 * structured metadata and consistent visual hierarchy.
 *
 * Uses the `Pill` and `ButtonLink` components for accessible, semantic display
 * of entry details. The layout automatically adjusts so that action buttons
 * (such as the Ko-fi link) stack below the pills on smaller screens
 * and align to the right on larger screens.
 *
 * @param props - Component properties.
 * @param props.title - The main entry title.
 * @param props.description - Optional short description or summary text.
 * @param props.date - The date of publication or last update.
 * @param props.readingTime - Optional estimated reading time, in minutes.
 * @param props.topics - Optional array of related topic tags.
 * @param props.includeKofiButton - Whether to include a default Ko-fi button (default: `true`).
 * @param props.kofiHref - Optional custom Ko-fi URL.
 * @param props.actions - Optional custom action buttons or links.
 * @param props.className - Optional custom Tailwind classes for styling.
 * @returns A styled `<section>` element containing the entry’s header information.
 */
export default function EntryHeader({
    title,
    description,
    date,
    readingTime,
    topics,
    includeKofiButton = true,
    kofiHref = KofiLink,
    actions,
    className = "",
}: EntryHeaderProps) {
    return (
        <section className={`hero-bg ${className}`}>
            <div className="mx-auto max-w-6xl px-4 py-20">
                <h1 className="mt-4 text-pretty text-4xl font-extrabold tracking-tight sm:text-5xl">
                    {title}
                </h1>

                <p className="mt-4 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    {decorateIcon(<CalendarIcon />)}{" "}
                    {date && (
                        <time dateTime={date}>
                            {new Date(date).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                            })}
                        </time>
                    )}
                    <span className="mx-2" aria-hidden="true">|</span>
                    {decorateIcon(<ClockIcon />)} {readingTime} min read
                </p>

                {description && (
                    <p className="mt-4 max-w-prose text-lg text-slate-700 dark:text-slate-300">
                        {description}
                    </p>
                )}

                <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
                    {topics && <TopicChipsList topics={topics} />}

                    {/* Right-aligned actions */}
                    <div className="mt-4 flex w-full justify-start md:ml-auto md:mt-0 md:w-auto">
                        {actions ??
                            (includeKofiButton && (
                                <ButtonLink
                                    href={kofiHref}
                                    text="Buy me a coffee"
                                    icon={<CoffeeIcon />}
                                    type="secondary"
                                />
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
