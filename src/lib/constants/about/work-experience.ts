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
        highlight: "EdTech",
        description:
            "LMS evaluation and rollout, API integrations, staff/student adoption.",
        image: "/img/institutions/imperial-logo.svg",
    },
    {
        dates: "2021 — Present",
        jobTitle: "Full-stack Developer",
        employer: "Freelance & side projects",
        location: "Remote",
        highlight: "Full-stack",
        description:
            "React/Next.js, Node/Express, PostgreSQL, accessibility-focused UI.",
        image: "/android-chrome-512x512.png",
    },
];
