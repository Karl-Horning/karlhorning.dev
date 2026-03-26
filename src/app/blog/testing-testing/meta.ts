import { BlogMeta } from "@/types";
import "server-only";

export const meta = {
    title: "Testing, Testing",
    description:
        "A light-hearted post about testing my new blog, tweaking layouts, and checking how everything fits together.",
    date: "2025-06-23T21:14:00Z",
    readingTime: 2,
    slug: "testing-testing",
    thumbnail: {
        src: "/img/blog/pexels-mali-63238.optimised.webp",
        alt: "Graffiti of a monkey wearing sunglasses (placeholder image)",
    },
    topics: ["meta", "blog", "testing"],
    draft: false,
} as const satisfies BlogMeta;
