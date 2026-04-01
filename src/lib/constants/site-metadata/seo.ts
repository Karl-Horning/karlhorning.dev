import { assets, externalLinks } from "../ui";

const { PortfolioLink } = externalLinks;

/**
 * Centralised SEO configuration constants used across the site.
 *
 * Provides consistent metadata and structured data values for
 * pages, Open Graph images, and JSON-LD definitions.
 *
 * Includes key site details such as name, base URL, description,
 * default image, contact email, and job titles.
 */
export const seo = {
    /** Display name of the site owner or brand */
    siteName: "Karl Horning",

    /** Canonical base URL for the website */
    siteUrl: PortfolioLink,

    /** Default description used for meta tags and structured data */
    defaultDescription:
        "Software engineer specialising in full-stack TypeScript and JavaScript — REST APIs, accessible web applications, and production systems with deep domain expertise in EdTech.",

    /** Default Open Graph or social sharing image */
    defaultImage: `${PortfolioLink}${assets.profileImage}`, // TODO: Update with a dedicated OG image

    /** Primary contact email address */
    defaultEmail: "karl.h@me.com",

    /** Default job titles for use in metadata and structured data */
    defaultJobTitle: [
        "Software Engineer",
        "Full-Stack JavaScript & TypeScript Developer",
    ],
};
