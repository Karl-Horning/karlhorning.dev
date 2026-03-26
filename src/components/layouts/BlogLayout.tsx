import { BlogMeta } from "@/types";
import { PropsWithChildren } from "react";
import EntryHeader from "../ui/EntryHeader";
import EntryCoverImage from "../ui/EntryCoverImage";
import ShareButtons from "../ui/ShareButtons";
import AuthorCard from "../ui/AuthorCard";
import PrevNextButtons from "../ui/PrevNextButtons";
import { getPrevNextBlogPost } from "@/lib/server";
import ContactCta from "../ui/ContactCta";

type BlogLayoutProps = PropsWithChildren<BlogMeta>;

/**
 * Layout component for individual blog posts.
 *
 * Combines shared blog UI elements — such as the header, cover image,
 * content area, author card, sharing buttons, and contextual navigation —
 * into a single consistent structure for all post pages.
 *
 * The layout also fetches the previous and next blog posts from the local
 * JSON dataset using {@link getPrevNextBlogPost} to generate navigation links.
 *
 * @remarks
 * This is a **server component** that wraps post content pages, allowing
 * asynchronous data fetching and static rendering. It expects all post
 * metadata (title, date, thumbnail, etc.) to be provided via the parent page.
 *
 * @param {BlogLayoutProps} props - Component properties.
 * @param {string} props.title - The blog post title.
 * @param {string} props.description - A short summary or intro text.
 * @param {string} props.date - ISO 8601 date string representing when the post was published.
 * @param {number} props.readingTime - Estimated reading time in minutes.
 * @param {string} props.slug - The post slug, used for routing and sharing links.
 * @param {object} props.thumbnail - Object describing the post’s cover image.
 * @param {Array} props.topics - List of tags or topics associated with the post.
 * @param {boolean} [props.draft] - Optional flag indicating an unpublished post.
 * @param {React.ReactNode} props.children - The main post body content (MDX or HTML).
 *
 * @returns The complete blog post layout, including header, main content, and footer sections.
 *
 * @example
 * ```tsx
 * <BlogLayout
 *   title="Understanding React Server Components"
 *   description="An overview of how RSCs change the rendering model in Next.js"
 *   date="2025-10-10"
 *   readingTime={7}
 *   slug="react-server-components"
 *   thumbnail={{ src: "/images/react.jpg", alt: "React logo" }}
 *   topics={[{ title: "#React", link: "/blog/tag/react" }]}
 * >
 *   <p>React Server Components allow you to...</p>
 * </BlogLayout>
 * ```
 */
export default async function BlogLayout({
    title,
    description,
    date,
    readingTime,
    slug,
    thumbnail,
    topics,
    draft,
    children,
}: BlogLayoutProps) {
    const { previous, next } = await getPrevNextBlogPost(slug);

    return (
        <main id="main">
            <EntryHeader
                title={title}
                description={description}
                date={date}
                readingTime={readingTime}
                topics={topics}
            />
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pt-20">
                <EntryCoverImage {...thumbnail} />

                <article className="prose prose-slate dark:prose-invert mx-auto max-w-3xl">
                    {children}
                </article>

                <div className="mx-auto max-w-3xl">
                    <ShareButtons slug={`blog/${slug}`} />
                    <AuthorCard />
                    {/* Populates the previous and next buttons dynamically from JSON data */}
                    {(previous || next) && (
                        <PrevNextButtons
                            contextTitle="Blog post"
                            itemType="post"
                            previous={previous ?? undefined}
                            next={next ?? undefined}
                        />
                    )}
                </div>
            </div>

            <ContactCta
                title="Enjoyed this post?"
                description="I'm available for freelance work and consultancy in EdTech and full-stack development."
            />
        </main>
    );
}
