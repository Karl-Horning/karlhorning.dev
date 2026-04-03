import { createMetadata } from "@/lib/helpers";
import Image from "next/image";
import { assets, icons, internalRoutes } from "@/lib/constants/ui";
import ContactCta from "@/components/ui/ContactCta";
import { notFoundTopics } from "@/lib/constants/not-found";
import TopicChipsList from "@/components/ui/TopicChipsList";
import ButtonLink from "@/components/ui/ButtonLink";

const { notFoundImage } = assets;
const { HomeIcon, RssIcon } = icons;
const { HomeRoute, BlogRoute } = internalRoutes;

export const metadata = createMetadata({
    title: "404",
    description:
        "The link may be broken or the page removed. Here are a few common destinations and topics you might be after.",
});

/**
 * Renders the custom 404 error page displayed when a route is not found.
 *
 * Provides users with clear next steps through:
 * - Prominent header and explanatory message
 * - Quick navigation buttons (home and blog)
 * - Topic chip suggestions for popular content
 * - A closing contact call-to-action for further help
 *
 * Designed for accessibility, legibility, and usability —
 * ensuring users can quickly recover from navigation errors.
 *
 * @remarks
 * - Uses semantic HTML (`<section>`) and ARIA labelling for clarity.
 * - Includes responsive layout with grid-based design for wide screens.
 * - Adapts to both light and dark themes using Tailwind classes.
 * - Uses {@link ContactCta} and {@link TopicChipsList} to promote reusability.
 *
 * @returns The structured 404 error page with navigational guidance, helpful links, and contact options.
 *
 * @example
 * ```tsx
 * // Automatically rendered when no route matches
 * export default function NotFound() {
 *   return (
 *     <section id="not-found">
 *       <h1>Let's get you back on course</h1>
 *       <ButtonLink href={HomeRoute} text="Go home" />
 *       <TopicChipsList topics={notFoundTopics} />
 *       <ContactCta title="Still stuck?" description="I'm happy to help." />
 *     </section>
 *   );
 * }
 * ```
 */
export default function NotFound() {
    return (
        <section id="not-found" className="hero-bg">
            <div className="mx-auto max-w-6xl px-4 pt-20">
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_20rem]">
                        <div>
                            <p className="text-sm font-semibold uppercase text-primary">
                                404 — Page missing
                            </p>
                            <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
                                Let&apos;s get you back on course
                            </h1>
                            <p className="mt-4 text-slate-700 dark:text-slate-300">
                                The link may be broken or the page removed. Here
                                are a few common destinations and topics you
                                might be after.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <ButtonLink
                                    href={HomeRoute}
                                    text="Go home"
                                    icon={<HomeIcon />}
                                />

                                <ButtonLink
                                    href={BlogRoute}
                                    text="Read the blog"
                                    icon={<RssIcon />}
                                    type="secondary"
                                />
                            </div>

                            <div className="mt-6">
                                <ul className="mt-6 flex flex-wrap gap-2">
                                    <TopicChipsList topics={notFoundTopics} />
                                </ul>
                            </div>
                        </div>

                        <Image
                            src={notFoundImage}
                            height={200}
                            width={200}
                            alt=""
                            className="mx-auto w-full max-w-md rounded-2xl border border-slate-200 object-cover dark:border-slate-800"
                        />
                    </div>
                </div>
            </div>
            <ContactCta title="Still stuck?" description="I'm happy to help." />
        </section>
    );
}
