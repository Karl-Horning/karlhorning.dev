import { icons } from "@/lib/constants/ui";
import { decorateIcon } from "@/lib/helpers";
const { NextIcon, PreviousIcon } = icons;

interface PrevNextButtonsProps {
    /**
     * The contextual title of the page or section being navigated,
     * used to generate the `aria-label` for the navigation landmark.
     *
     * @example "Projects" → aria-label="Projects pagination"
     */
    contextTitle: string;

    /**
     * The type of content item being navigated between.
     * Determines the wording for accessibility labels.
     */
    itemType: "project" | "post" | "section" | "page";

    /**
     * Optional information for the previous item.
     * Includes both title and URL path.
     */
    previous?: {
        /** The title or label of the previous item. */
        title: string;
        /** The href for the previous item. */
        href: string;
    };

    /**
     * Optional information for the next item.
     * Includes both title and URL path.
     */
    next?: {
        /** The title or label of the next item. */
        title: string;
        /** The href for the next item. */
        href: string;
    };
}

/**
 * Renders a pair of **Previous** and **Next** navigation buttons for paginated content.
 *
 * Commonly used on project, blog post, or portfolio section pages to provide
 * accessible next/previous navigation links.
 *
 * Buttons are visually styled as cards with hover states and become disabled when
 * there’s no corresponding previous or next item.
 *
 * @param {PrevNextButtonsProps} props - The properties for the component.
 * @param {string} props.contextTitle - Title of the current context, used for the `aria-label`.
 * @param {"project" | "post" | "section" | "page"} props.itemType - Type of content being navigated.
 * @param {object} [props.previous] - Optional object describing the previous item.
 * @param {object} [props.next] - Optional object describing the next item.
 * @returns A `<nav>` element containing styled “Previous” and “Next” navigation buttons.
 */
export default function PrevNextButtons({
    contextTitle,
    itemType,
    previous,
    next,
}: PrevNextButtonsProps) {
    const base =
        "group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800";
    const disabledClasses = "opacity-50 pointer-events-none cursor-not-allowed";

    const prevDisabled = !previous?.href;
    const nextDisabled = !next?.href;

    const PrevInner = (
        <>
            <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                {decorateIcon(<PreviousIcon />)}
            </span>
            <div>
                <span className="text-xs text-slate-500 dark:text-slate-300">
                    Previous {itemType}
                </span>
                <p className="font-semibold">
                    {previous?.href ? previous.title : "—"}
                </p>
            </div>
        </>
    );

    const NextInner = (
        <>
            <div className="ml-auto text-right">
                <span className="block text-xs text-slate-500 dark:text-slate-300">
                    Next {itemType}
                </span>
                <p className="font-semibold">
                    {next?.href ? next.title : "—"}
                </p>
            </div>
            <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                {decorateIcon(<NextIcon />)}
            </span>
        </>
    );

    return (
        <nav
            className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2"
            aria-label={`${contextTitle} pagination`}
        >
            {/* Previous */}
            {prevDisabled ? (
                <span className={`${base} ${disabledClasses}`} aria-disabled="true">
                    {PrevInner}
                </span>
            ) : (
                <a
                    className={base}
                    href={previous.href}
                    aria-label={`Previous ${itemType}: ${previous.title}`}
                    rel="prev"
                >
                    {PrevInner}
                </a>
            )}

            {/* Next */}
            {nextDisabled ? (
                <span className={`${base} ${disabledClasses}`} aria-disabled="true">
                    {NextInner}
                </span>
            ) : (
                <a
                    className={base}
                    href={next.href}
                    aria-label={`Next ${itemType}: ${next.title}`}
                    rel="next"
                >
                    {NextInner}
                </a>
            )}
        </nav>
    );
}
