import BlogCard from "@/components/ui/BlogCard";
import { BlogMeta } from "@/types";

interface BlogLandingPostsProps {
    /**
     * An optional array of blog post metadata to display.
     * Each post should conform to the {@link BlogMeta} type.
     */
    blogPosts?: BlogMeta[];
}

/**
 * Displays a responsive grid of blog posts.
 *
 * Fetches blog post metadata via `getBlogMetas()` and renders
 * each entry as a `BlogCard` component. The grid adapts from
 * a single column on mobile to multiple columns on larger screens.
 *
 * TODO: The `<nav>` element at the bottom is reserved for future
 * pagination controls.
 *
 * @param {BlogLandingPostsProps} props - Component props.
 * @param {BlogMeta[]} [props.blogPosts=[]] - Array of blog posts to render.
 * @returns The main blog posts section with a responsive grid layout.
 */
export default async function BlogLandingPosts({
    blogPosts = [],
}: BlogLandingPostsProps) {
    return (
        <article id="blogLandingPosts" className="mx-auto max-w-6xl px-4 pt-20">
            {blogPosts.length >= 1 ? (
                <div
                    id="grid"
                    className="grid grid-cols-1 gap-4 md:grid-cols-2 md:[grid-auto-rows:1fr] lg:grid-cols-3"
                >
                    {blogPosts.map((post) => (
                        <div key={post.title}>
                            <BlogCard {...post} />
                        </div>
                    ))}
                </div>
            ) : (
                <h3 className="text-center text-2xl font-semibold">
                    No posts found!
                </h3>
            )}
        </article>
    );
}
