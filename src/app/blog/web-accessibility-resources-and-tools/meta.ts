import { BlogMeta } from "@/types";
import "server-only";

export const meta = {
    title: "Web Accessibility Resources and Tools: Guidelines, Checklists, and Testing Solutions",
    description:
        "A reference list of web accessibility tools, guidelines, and articles — with starred items for quick starting points.",
    date: "2025-10-22T20:10:00Z",
    readingTime: 7,
    slug: "web-accessibility-resources-and-tools",
    thumbnail: {
        src: "/img/blog/header-computer.png",
        alt: "A collection of icons representing accessibility and web tools",
    },
    topics: ["accessibility", "a11y", "web-development", "resources"],
    draft: false,
} as const satisfies BlogMeta;
