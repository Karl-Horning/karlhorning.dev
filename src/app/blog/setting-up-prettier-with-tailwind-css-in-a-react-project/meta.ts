import type { BlogMeta } from "@/types";
import "server-only";

export const meta = {
    title: "Setting Up Prettier with Tailwind CSS in a React Project",
    description:
        "The setup I use at the start of every React project — Prettier with Tailwind CSS class sorting, for both Next.js and Vite.",
    date: "2025-08-04T16:03:00Z",
    readingTime: 4,
    slug: "setting-up-prettier-with-tailwind-css-in-a-react-project",
    thumbnail: {
        src: "/img/blog/prettier_tailwind.webp",
        alt: "The Next.js, React, Vite, Tailwind, and Prettier logos",
    },
    topics: [
        "Prettier",
        "Tailwind CSS",
        "React",
        "Next.js",
        "Vite",
        "JavaScript",
    ],
    draft: false,
} as const satisfies BlogMeta;
