import BlogLandingPosts from "@/components/blog/BlogLandingPosts";
import BlogLandingFooter from "@/components/blog/BlogLandingFooter";
import { BlogMeta } from "@/types";
import PageIntroSplit from "@/components/ui/PageIntroSplit";
import { icons, internalRoutes } from "@/lib/constants/ui";
import { createMetadata } from "@/lib/helpers";
import { jsonLdBlog } from "@/lib/constants/site-metadata";
import { getBlogPosts } from "@/lib/server";

const { BlogIcon, ReadMoreIcon, RssIcon } = icons;
const { BlogRoute, RssFeed } = internalRoutes;

/**
 * Static metadata for the Blog landing page.
 *
 * Generated using {@link createMetadata} and enhanced with
 * structured data via {@link jsonLdBlog} for SEO and discoverability.
 */
export const metadata = createMetadata({
    title: "Blog",
    path: BlogRoute,
    jsonLd: jsonLdBlog,
});

/**
 * Forces static generation of the Blog landing page.
 *
 * Ensures the page is built at compile time for optimal
 * performance and predictable load behaviour.
 */
export const dynamic = "force-static";

/**
 * Renders the **Blog** landing page.
 *
 * This is the main index for all blog posts and acts as an entry
 * point for written reflections, tutorials, and technical notes.
 *
 * The component fetches metadata for all posts using {@link getBlogPosts}
 * and presents them within a structured, accessible layout consisting of:
 *
 * ### Layout structure
 * - {@link PageIntroSplit} — Hero section introducing the blog and CTAs.
 * - {@link BlogLandingPosts} — Responsive grid of post previews.
 * - {@link BlogLandingFooter} — Footer section with supplementary navigation.
 *
 * ### Behaviour
 * - The page is statically generated (`force-static`).
 * - Fetches blog metadata only once at build time.
 * - Optimised for SEO via `metadata` export.
 *
 * @async
 * @returns The complete Blog index page with hero intro, post listings, and footer.
 *
 * @example
 * ```tsx
 * export default async function Page() {
 *   const blogPosts = await getBlogPosts();
 *   return (
 *     <>
 *       <PageIntroSplit
 *         title="Blog"
 *         leadParagraph="Tutorials and notes on React, TypeScript, accessibility, and EdTech."
 *         tagline="Writing & Reflections"
 *         heroIcon={<BlogIcon />}
 *       />
 *       <BlogLandingPosts blogPosts={blogPosts} />
 *       <BlogLandingFooter />
 *     </>
 *   );
 * }
 * ```
 */
export default async function Page() {
    // Fetch metadata for all published blog posts
    const blogPosts: BlogMeta[] = await getBlogPosts();

    return (
        <>
            <PageIntroSplit
                title="Blog"
                leadParagraph="Tutorials and notes on JavaScript/TypeScript, React/Next.js, APIs, accessibility and EdTech."
                tagline="Writing & Reflections"
                heroIcon={<BlogIcon />}
                primaryCta={{
                    href: `${BlogRoute}#blogLandingPosts`,
                    text: "Read latest posts",
                    icon: <ReadMoreIcon />,
                }}
                secondaryCta={{
                    href: RssFeed,
                    text: "Subscribe",
                    icon: <RssIcon />,
                }}
            />
            <BlogLandingPosts blogPosts={blogPosts} />
            <BlogLandingFooter />
        </>
    );
}
