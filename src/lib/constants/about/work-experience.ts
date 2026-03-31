import { WorkExperience } from "@/types";

/**
 * Collection of work experience entries displayed in the Experience section.
 *
 * Each entry includes a date range, job title, employer, location,
 * highlight (used as a pill), and a description of key responsibilities
 * and achievements.
 *
 * Used by the `Experience` component to render `ExperienceCard` items.
 */
export const workExperience: WorkExperience[] = [
    {
        dates: "2024 — Present",
        jobTitle: "Learning Technologist",
        employer: "Imperial College London",
        location: "Hybrid/London, UK",
        highlight: "API Integration",
        description:
            "Built a Postman API testing framework from OpenAPI specs to validate OAuth2/OIDC identity flows across enterprise LMS platforms; conducted a technical capability audit assessing APIs, integration models, and security for a Tier-1 research university.",
        image: "/img/institutions/imperial-logo.svg",
    },
    {
        dates: "2021 — 2024",
        jobTitle: "Full-Stack Software Engineer",
        employer: "Learnlight",
        location: "Remote",
        highlight: "Full-stack",
        description:
            "Achieved 10x GraphQL API performance improvement via DataLoader batching; designed custom rate-limiting for SCORM/LTI integrations; integrated Mocha/Postman tests into CI/CD — all within an AWS microservice backend serving 700k+ learners across 180 countries.",
        image: "/img/institutions/learnlight-logo.svg",
    },
    {
        dates: "2021 — Present",
        jobTitle: "Full-Stack Developer",
        employer: "Freelance & side projects",
        location: "Remote",
        highlight: "Full-stack",
        description:
            "React/Next.js, Node/Express, PostgreSQL, accessibility-focused UI.",
        image: "/android-chrome-512x512.png",
    },
];
