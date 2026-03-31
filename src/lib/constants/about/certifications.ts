import { Certification } from "@/types";
import { links } from "../cmalt";

const { dyslexiaAwareness } = links;

/**
 * Collection of professional certifications and badges.
 *
 * Each item includes metadata such as the certification title,
 * issuing organisation, date earned, badge image, and an optional
 * verification link for external validation.
 *
 * Used in the `Certifications` section to showcase verified skills
 * and professional achievements.
 */
export const certificationItems: Certification[] = [
    {
        title: "Jira Fundamentals",
        body: "Atlassian University",
        date: "2024-08-15",
        image: "/img/badges/atlassian-university-badge.png",
        verification:
            "https://university.atlassian.com/student/award/RhE4JXVHSg7trwMkqLsi6pE4",
    },
    {
        title: "Registered Scrum Basics",
        body: "Scrum Inc.",
        date: "2025-09-30",
        image: "/img/badges/registered-scrum-basics-badge.png",
        verification: "https://s3.amazonaws.com/scruminc-certs/RSB-8515474",
    },
    {
        title: "Dyslexia Awareness",
        body: "Made By Dyslexia",
        date: "2025-09-05",
        image: "/img/badges/dyslexia-awareness-badge.svg",
        verification: dyslexiaAwareness,
    },
];
