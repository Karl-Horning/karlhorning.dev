import { BlogMeta } from "@/types";
import "server-only";

export const meta = {
    title: "Using Blackboard's Swagger File to Create a Postman Collection and Make an API Call",
    description:
        "This beginner-friendly tutorial walks you through importing Blackboard's Learn API into Postman, setting up OAuth2 authentication, and making a test request using client credentials.",
    date: "2025-07-11T18:31:00Z",
    readingTime: 7,
    slug: "using-blackboards-swagger-file-to-create-a-postman-collection-and-make-an-api-call",
    thumbnail: {
        src: "/img/blog/postman_blackboard.webp",
        alt: "The Postman and Blackboard Learn logos",
    },
    topics: ["Blackboard", "Postman", "API", "Swagger", "OAuth2", "EdTech"],
    draft: false,
} as const satisfies BlogMeta;
