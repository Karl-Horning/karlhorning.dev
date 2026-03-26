import { promises as fs } from "fs";
import path from "path";
import { cache } from "react";
import { BlogMeta, CmaltPage, ProjectMeta } from "@/types";

/**
 * Minimum shape required for any item used with `createPrevNext`.
 *
 * Items must include a `slug` (unique identifier, often URL-safe)
 * and a `title` (used as link text).
 */
type HasSlugAndTitle = {
    slug: string;
    title: string;
};

/**
 * Represents a single link to a previous or next item.
 *
 * Used in `PrevNextResult` to define navigation targets.
 */
type PrevNextLink = {
    /** The display title for the linked item. */
    title: string;

    /** The full URL or path to the linked item. */
    href: string;
};

/**
 * The combined result of calling `getPrevNext()`.
 *
 * Contains optional `previous` and `next` navigation links,
 * both of which may be `null` if there's no adjacent item.
 */
type PrevNextResult = {
    /** The previous item in sequence, or `null` if none exists. */
    previous: PrevNextLink | null;

    /** The next item in sequence, or `null` if none exists. */
    next: PrevNextLink | null;
};

/**
 * Creates a cached helper function to find the previous and next items
 * within a JSON data list based on a given `slug`.
 *
 * The returned `getPrevNext` function reads and parses the JSON file,
 * locates the current item, and returns the neighbouring entries with
 * their titles and URLs. Designed for static collections such as blog posts,
 * projects, or portfolio items.
 *
 * Example usage:
 * ```ts
 * const getPrevNext = createPrevNext("src/data/posts.json", "/blog");
 * const { previous, next } = await getPrevNext("my-post-slug");
 * ```
 *
 * @template T - The item type, which must include `slug` and `title` fields.
 * @param relativeJsonPath - Path (relative to the project root) of the JSON file containing the ordered list of items.
 * @param baseHref - Base URL prefix to use when constructing navigation links.
 * @returns An async function `getPrevNext(slug)` that resolves to the previous and next link objects, or `null` when not found.
 */
function createPrevNext<T extends HasSlugAndTitle>(
    relativeJsonPath: string,
    baseHref: string
) {
    const base = baseHref.replace(/\/$/, "");

    /**
     * Builds a valid href for the given slug.
     * - Removes leading/trailing slashes from the slug.
     * - Returns the base path when slug is empty (for example, "/cmalt").
     *
     * @example "contextual-statement" → "/cmalt/contextual-statement"
     */
    const hrefFor = (slug: string) =>
        slug ? `${base}/${slug.replace(/^\/|\/$/g, "")}` : base;

    /**
     * Reads and parses the JSON file containing all items.
     * Cached using React's `cache()` to avoid redundant disk reads.
     */
    const readAll = cache(async (): Promise<T[]> => {
        const file = path.join(process.cwd(), relativeJsonPath);
        const json = await fs.readFile(file, "utf-8");
        return JSON.parse(json) as T[];
    });

    /**
     * Retrieves the previous and next items surrounding the provided slug.
     *
     * @param slug - The slug of the current item to find neighbours for.
     * @returns An object with `previous` and `next` links (or `null` if at the start or end).
     */
    return async function getPrevNext(slug: string): Promise<PrevNextResult> {
        // Read cached list of all items from JSON
        const items = await readAll();

        // Find the index of the current item
        const i = items.findIndex((p) => p.slug === slug);
        if (i === -1) return { previous: null, next: null };

        // Determine adjacent items (if any)
        const prevItem = i > 0 ? items[i - 1] : null;
        const nextItem = i < items.length - 1 ? items[i + 1] : null;

        // Return structured links for easier use in UI components
        return {
            previous: prevItem
                ? { title: prevItem.title, href: hrefFor(prevItem.slug) }
                : null,
            next: nextItem
                ? { title: nextItem.title, href: hrefFor(nextItem.slug) }
                : null,
        };
    };
}

/**
 * Simplified representation of a blog post
 * used for generating previous/next navigation.
 *
 * Includes only the fields required for linking
 * and minimal display info.
 */
type BlogListItem = Pick<BlogMeta, "slug" | "title" | "description"> & {
    /** Associated topics/tags for the blog post. */
    topics: BlogMeta["topics"];

    /** Optional thumbnail image for the post. */
    thumbnail: BlogMeta["thumbnail"];
};

/**
 * Minimal CMALT page shape for navigation.
 *
 * Contains only the `slug`, `title`, and `description`
 * needed for previous/next link generation.
 */
type CmaltItem = Pick<CmaltPage, "slug" | "title" | "description">;

/**
 * Simplified project metadata for navigation.
 *
 * Includes the core identifying fields plus
 * topic tags and a thumbnail reference.
 */
type ProjectListItem = Pick<
    ProjectMeta,
    "slug" | "title" | "description" | "repo"
> & {
    /** Tags or technologies associated with the project. */
    topics: ProjectMeta["topics"];

    /** Thumbnail or preview image for the project. */
    thumbnail: ProjectMeta["thumbnail"];
};

/**
 * Retrieves the previous and next blog posts based on a given slug.
 *
 * Reads from `/public/data/posts.json` and constructs
 * links under the `/blog` route.
 *
 * @see createPrevNext
 */
export const getPrevNextBlogPost = createPrevNext<BlogListItem>(
    "public/data/posts.json",
    "/blog"
);

/**
 * Retrieves the previous and next CMALT pages based on a given slug.
 *
 * Reads from `/public/data/cmalt.json` and constructs
 * links under the `/cmalt` route.
 *
 * @see createPrevNext
 */
export const getPrevNextCmalt = createPrevNext<CmaltItem>(
    "public/data/cmalt.json",
    "/cmalt"
);

/**
 * Retrieves the previous and next project pages based on a given slug.
 *
 * Reads from `/public/data/projects.json` and constructs
 * links under the `/projects` route.
 *
 * @see createPrevNext
 */
export const getPrevNextProject = createPrevNext<ProjectListItem>(
    "public/data/projects.json",
    "/projects"
);
