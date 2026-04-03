import Image from "next/image";
import { BlogMeta } from "@/types";
import { internalRoutes } from "@/lib/constants/ui";
import { icons } from "@/lib/constants/ui";
import ButtonLink from "@/components/ui/ButtonLink";
import { decorateIcon } from "@/lib/helpers";
import TopicChipsList from "@/components/ui/TopicChipsList";

const { BlogRoute } = internalRoutes;
const { CalendarIcon, ClockIcon, ReadMoreIcon } = icons;

/**
 * A card component for displaying a single blog post preview.
 *
 * Shows:
 * - A featured image
 * - Post title (linked to the full article)
 * - Publication date
 * - A short description/summary
 * - A list of tags (linked to related content)
 *
 * Used in blog listing pages to provide a quick overview of recent
 * or related articles.
 *
 * @param props - The blog post properties.
 * @param props.title - The title of the blog post.
 * @param props.description - A short excerpt or teaser for the blog post.
 * @param props.date - The publication date as a string.
 * @param props.readingTime - The estimated reading time for the content.
 * @param props.slug - The unique slug of the blog post used to generate shareable URLs.
 * @param props.thumbnail - Thumbnail image object containing the source and alt text for the project cover image.
 * @param props.topics - An array of tags associated with the post. Each tag includes a title and link.
 * @returns A styled `<article>` element representing a blog post card.
 */
export default function BlogCard({
    title,
    description,
    date,
    readingTime,
    slug,
    thumbnail,
    topics,
}: BlogMeta) {
    return (
        <article className="card flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div className="flex flex-col">
                <Image
                    src={thumbnail.src}
                    alt={thumbnail.alt}
                    aria-hidden={!thumbnail.alt ? "true" : undefined}
                    className="mb-4 h-48 w-full rounded-md object-cover"
                    loading="lazy"
                    width={400}
                    height={200}
                />

                <h2 className="mt-3 text-2xl font-bold">{title}</h2>

                <p className="mt-3 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    {decorateIcon(<CalendarIcon />)}
                    <time dateTime={date}>
                        {new Date(date).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                        })}
                    </time>
                    <span className="mx-2">|</span>
                    {decorateIcon(<ClockIcon />)} {readingTime} min read
                </p>

                <p className="mt-3 text-slate-700 dark:text-slate-300">
                    {description}
                </p>
            </div>

            <div className="mt-auto">
                <TopicChipsList topics={topics} />
                <hr className="mt-6 border-slate-100 dark:border-slate-800" />

                <footer>
                    <div className="mt-6 flex flex-col md:float-right md:flex-row">
                        <ButtonLink
                            href={`${BlogRoute}/${slug}`}
                            text={
                                <>
                                    Read more{" "}
                                    <span className="sr-only">
                                        about {title}
                                    </span>
                                </>
                            }
                            icon={<ReadMoreIcon />}
                            className="text-center md:text-left"
                        />
                    </div>
                </footer>
            </div>
        </article>
    );
}
