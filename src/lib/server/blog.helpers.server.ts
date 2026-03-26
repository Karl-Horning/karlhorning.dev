import { promises as fs } from "fs";
import path from "path";
import { BlogMeta } from "@/types";
import { slugify } from "@/lib/helpers";

/**
 * Reads a limited number of blog posts from a static JSON file served in the `/public/data` directory.
 *
 * This function reads the JSON file directly from the filesystem during build
 * so that fetch is not needed and no network errors occur.
 *
 * @async
 * @function
 * @param {number} [limit=10] - The number of blog posts to return.
 * @throws Will throw an error if reading or parsing the file fails.
 */
export async function getBlogPosts(limit: number = 10): Promise<BlogMeta[]> {
    const all = await getAllBlogPosts();
    return all.slice(0, limit);
}

let _cache: BlogMeta[] | null = null;

/**
 * Loads all blog posts from the JSON index, sorted (newest first) and with drafts removed.
 *
 * @async
 * @function
 * @returns Resolves to the full list of published blog posts.
 */
export async function getAllBlogPosts(): Promise<BlogMeta[]> {
    if (_cache) return _cache;

    const jsonFilePath = path.join(
        process.cwd(),
        "public",
        "data",
        "posts.json"
    );
    const jsonData = await fs.readFile(jsonFilePath, "utf-8");
    const data: BlogMeta[] = JSON.parse(jsonData);

    // exclude drafts, sort newest → oldest
    _cache = data
        .filter((p) => !p.draft)
        .sort((a, b) => (a.date < b.date ? 1 : -1));

    return _cache;
}

/**
 * Returns all unique tags used across published posts, normalised and sorted.
 *
 * @async
 * @function
 * @returns A sorted array of unique tag labels (lowercase).
 */
export async function getAllTags(): Promise<string[]> {
    const posts = await getAllBlogPosts();
    const set = new Set<string>();
    posts.forEach((p) => p.topics?.forEach((t) => set.add(slugify(t))));
    return Array.from(set).sort();
}

/**
 * Returns the posts that contain a given tag (case-insensitive).
 *
 * @async
 * @function
 * @param tag - The tag to match (for example, "react").
 * @returns An array of blog posts that include the tag.
 */
export async function getPostsByTag(tag: string): Promise<BlogMeta[]> {
    const key = tag.trim().toLowerCase();
    const posts = await getAllBlogPosts();
    return posts.filter((p) => p.topics?.some((t) => slugify(t) === key));
}

/**
 * Simple pagination helper for a list of posts.
 *
 * @param items - The already-filtered list of posts to paginate.
 * @param page - 1-based page number (defaults to 1).
 * @param perPage - Items per page (defaults to 10).
 * @returns A slice plus pagination metadata.
 */
export function paginate(
    items: BlogMeta[],
    page: number = 1,
    perPage: number = 10
) {
    const total = items.length;
    const totalPages = Math.max(1, Math.ceil(total / perPage));
    const current = Math.min(Math.max(1, page), totalPages);
    const start = (current - 1) * perPage;
    const end = start + perPage;

    return {
        items: items.slice(start, end),
        page: current,
        perPage,
        total,
        totalPages,
    };
}

/**
 * Returns a paginated slice of all published posts.
 *
 * @async
 * @function
 * @param page - 1-based page number (defaults to 1).
 * @param perPage - Items per page (defaults to 10).
 * @returns Pagination metadata with the current page of posts.
 */
export async function getPostsPage(page: number = 1, perPage: number = 10) {
    const posts = await getAllBlogPosts();
    return paginate(posts, page, perPage);
}

/**
 * Returns a paginated slice of posts filtered by a tag.
 *
 * @async
 * @function
 * @param tag - Tag label to filter by (case-insensitive).
 * @param page - 1-based page number (defaults to 1).
 * @param perPage - Items per page (defaults to 10).
 * @returns Pagination metadata with the current tag-filtered page of posts.
 */
export async function getTagPage(
    tag: string,
    page: number = 1,
    perPage: number = 10
) {
    const filtered = await getPostsByTag(tag);
    return paginate(filtered, page, perPage);
}

/**
 * Basic free-text search over title and description.
 *
 * For more advanced scoring, extend to search slugs/content or add weights.
 *
 * @async
 * @function
 * @param q - The case-insensitive search query.
 * @param limit - Optional maximum number of results to return.
 * @returns Matching posts sorted by date (newest first).
 */
export async function searchBlogPosts(q: string, limit?: number) {
    const needle = q.trim().toLowerCase();
    if (!needle) return [];

    const posts = await getAllBlogPosts();
    const results = posts.filter((p) => {
        const hay = `${p.title} ${p.description} ${p.slug}`.toLowerCase();
        return hay.includes(needle);
    });

    return typeof limit === "number" ? results.slice(0, limit) : results;
}
