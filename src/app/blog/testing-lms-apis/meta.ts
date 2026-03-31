import { BlogMeta } from "@/types";
import "server-only";

export const meta = {
    title: "Testing LMS APIs: What an OpenAPI Spec Gives You (and What It Doesn't)",
    description:
        "What I learned building a reusable Postman testing framework across three LMS APIs — and how Blackboard, Canvas, and Brightspace each presented different challenges.",
    date: "2025-07-11T18:31:00Z",
    readingTime: 5,
    slug: "testing-lms-apis",
    thumbnail: {
        src: "/img/blog/testing_lms_apis.webp",
        alt: "The Postman and Blackboard Learn logos",
    },
    topics: ["API", "OpenAPI", "Postman", "OAuth2", "testing", "LMS"],
    draft: false,
} as const satisfies BlogMeta;
