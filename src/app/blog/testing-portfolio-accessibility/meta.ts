import { BlogMeta } from "@/types";
import "server-only";

export const meta = {
    title: "Testing My Portfolio for Accessibility: What axe-core Found (and What It Didn't)",
    description:
        "What happened when I added Playwright and axe-core to my portfolio site — the structural issues that surfaced, how I fixed them, and what automated testing still missed.",
    date: "2026-04-01T10:22:00Z",
    readingTime: 6,
    slug: "testing-portfolio-accessibility",
    thumbnail: {
        src: "/img/blog/testing-my-portfolio-for-accessibility.webp",
        alt: "",
    },
    topics: ["accessibility", "a11y", "testing", "Playwright", "axe-core", "React"],
    draft: false,
} as const satisfies BlogMeta;
