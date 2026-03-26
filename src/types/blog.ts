import { Thumbnail } from "./index";

export type BlogMeta = {
    /**
     * The blog post title displayed in the page header.
     */
    title: string;

    /**
     * A short description or summary of the blog post's content.
     */
    description: string;

    /**
     * The ISO 8601 date (for example, `"2025-10-07T09:00:00Z"`) representing
     * when the blog post was created or last updated.
     */
    date: `${number}-${number}-${number}T${number}:${number}:${number}Z`;

    /**
     * Estimated reading time in minutes for the blog post content.
     */
    readingTime: number;

    /**
     * The unique slug for the blog post, used to build URLs
     * for sharing and navigation.
     */
    slug: string;

    /**
     * Thumbnail image object containing the source and alt text
     * for the blog post cover image.
     */
    thumbnail: Thumbnail;

    /**
     * An array of string used as tags or metadata
     * for filtering or categorising blog posts.
     */
    topics: string[];

    /**
     * Marks the blog post as a draft, preventing it from appearing
     * in public listings until published.
     */
    draft?: boolean;
};
