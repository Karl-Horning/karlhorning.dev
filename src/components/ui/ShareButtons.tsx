import { externalLinks, icons } from "@/lib/constants/ui";
import { decorateIcon } from "@/lib/helpers";

const { LinkedInIcon, XIcon } = icons;
const { PortfolioLink } = externalLinks;

interface ShareButtonsProps {
    /**
     * The unique slug of the project used to generate shareable URLs.
     * For example, `"graphql-rate-limit-demo"`.
     */
    slug: string;
}

/**
 * Renders a pair of social share buttons for the current project page.
 *
 * Generates sharing links for **X (formerly Twitter)** and **LinkedIn**, using the provided project slug
 * to construct full URLs based on the site's portfolio base link.
 *
 * Each button is styled consistently for light and dark modes, and opens the share dialogue in a new tab.
 *
 * @param {ShareButtonsProps} props - The properties for the ShareButtons component.
 * @param {string} props.slug - The unique slug identifying the current project.
 * @returns A `<section>` element containing share buttons for X and LinkedIn.
 */
export default function ShareButtons({ slug }: ShareButtonsProps) {
    return (
        <section className="flex flex-wrap items-center gap-3" aria-label="Share this page">
            <span className="text-sm text-slate-600 dark:text-slate-400">
                Share:
            </span>
            <a
                href={`https://twitter.com/intent/tweet?text=${PortfolioLink}/${slug}`}
                className="flex cursor-pointer items-center rounded-lg border border-slate-300 bg-white px-3 py-1 text-sm shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
                target="_blank"
                rel="noreferrer"
                id="shareTwitter"
                aria-label="Post to X"
            >
                {decorateIcon(<XIcon className="mr-1" />)}
                Post
            </a>
            <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${PortfolioLink}/${slug}`}
                className="flex cursor-pointer items-center rounded-lg border border-slate-300 bg-white px-3 py-1 text-sm shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
                target="_blank"
                rel="noreferrer"
                id="shareLinkedIn"
                aria-label="Share on LinkedIn"
            >
                {decorateIcon(<LinkedInIcon className="mr-1" />)}
                Share
            </a>
        </section>
    );
}
