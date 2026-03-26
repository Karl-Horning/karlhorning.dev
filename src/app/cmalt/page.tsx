import { createMetadata } from "@/lib/helpers";
import { icons, internalRoutes } from "@/lib/constants/ui";
import { meta } from "./meta";
import ContactCta from "@/components/ui/ContactCta";
import PrevNextButtons from "@/components/ui/PrevNextButtons";
import CmaltSidebar from "@/components/cmalt/CmaltSidebar";
import { getPrevNextCmalt } from "@/lib/server";
import PageIntroSplit from "@/components/ui/PageIntroSplit";
import { jsonLdCMALT } from "@/lib/constants/site-metadata";

const { CmaltRoute } = internalRoutes;
const { CertificateIcon, InfoIcon, ReadMoreIcon } = icons;

/**
 * Static metadata for the CMALT home page.
 *
 * Built using {@link createMetadata} and includes structured data
 * from {@link jsonLdCMALT} for improved SEO and discoverability.
 */
export const metadata = createMetadata({
    title: `${meta.title} | CMALT`,
    path: CmaltRoute,
    jsonLd: jsonLdCMALT,
});

/**
 * Renders the **CMALT Portfolio Home Page**.
 *
 * This page introduces the user's CMALT accreditation portfolio,
 * explaining its structure, purpose, and navigation. It serves as
 * the main landing page for the CMALT section of the site.
 *
 * ### Layout structure
 * - {@link PageIntroSplit} — Hero section with title, description, and CTAs.
 * - {@link CmaltSidebar} — Persistent sidebar for section navigation.
 * - `<main>` — Core content explaining the portfolio and framework.
 * - {@link PrevNextButtons} — Pagination links for previous/next sections.
 * - {@link ContactCta} — Footer call-to-action inviting further contact.
 *
 * ### Behaviour
 * - Fetches adjacent section data via {@link getPrevNextCmalt} for
 *   contextual pagination between CMALT pages.
 * - Uses locally sourced metadata from the `meta` module for title and slug.
 * - The primary CTA links to the next CMALT page, falling back to the index route.
 * - The sidebar remains sticky on large screens for easy navigation.
 *
 * @remarks
 * This page contains the introductory overview and explanation of the
 * CMALT framework. It is designed for clarity and accessibility rather
 * than dynamic interactivity.
 *
 * @async
 * @returns The statically rendered CMALT home page layout.
 *
 * @example
 * ```tsx
 * export default async function Page() {
 *   const { previous, next } = await getPrevNextCmalt(meta.slug);
 *   return (
 *     <>
 *       <PageIntroSplit
 *         title="CMALT Portfolio"
 *         tagline="Accreditation Portfolio"
 *         heroIcon={<CertificateIcon />}
 *       />
 *       <CmaltSidebar />
 *       <main>...</main>
 *       <PrevNextButtons previous={previous} next={next} />
 *       <ContactCta />
 *     </>
 *   );
 * }
 * ```
 */
export default async function Page() {
    // Retrieve previous and next CMALT pages for pagination controls
    const { previous, next } = await getPrevNextCmalt(meta.slug);
    const nextHref = next?.href ?? CmaltRoute;

    return (
        <>
            <PageIntroSplit
                title="CMALT Portfolio"
                leadParagraph="Reflecting on my professional practice and digital learning."
                tagline="Accreditation Portfolio"
                heroIcon={<CertificateIcon />}
                primaryCta={{
                    href: nextHref,
                    text: "View CMALT portfolio",
                    icon: <ReadMoreIcon />,
                }}
                secondaryCta={{
                    href: `${CmaltRoute}#about-cmalt`,
                    text: "What is CMALT?",
                    icon: <InfoIcon />,
                }}
            />

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pt-20 md:grid-cols-[16rem_1fr]">
                <div className="order-2 max-w-3xl">
                    <article className="prose prose-slate dark:prose-invert max-w-none">
                        <section id="header-description">
                            <h2>Welcome to My CMALT Portfolio</h2>
                            <p>
                                This portfolio forms part of my submission for
                                the
                                <strong>
                                    {" "}
                                    Certified Member of the Association for
                                    Learning Technology (CMALT)
                                </strong>{" "}
                                accreditation. It brings together a selection of
                                evidence and reflections that illustrate how I
                                apply learning technology in my professional
                                practice — from supporting educators and
                                students to developing digital tools and
                                evaluating emerging technologies.
                            </p>

                            <p>
                                Each section of this portfolio aligns with one
                                of the CMALT core principles, demonstrating{" "}
                                collaborative practice, communication,{" "}
                                understanding of learning technologies, and{" "}
                                commitment to professional development. You can
                                explore each section using the{" "}
                                <strong>navigation menu on the left</strong>.
                            </p>
                        </section>

                        <section id="about-cmalt">
                            <h2>About CMALT</h2>
                            <p>
                                The CMALT framework is designed to recognise and
                                reward the professional experience of those who
                                work with learning technology. It provides a
                                structured way to demonstrate professional
                                practice, values, and continuing development,
                                while reflecting on how technology enhances
                                teaching, learning, and assessment.
                            </p>

                            <p>
                                My submission draws on a range of professional
                                experiences — from teaching English and creating
                                accessibility resources to software development
                                and institutional learning platform evaluation.
                                Each area is underpinned by a shared focus on
                                inclusion, usability, and evidence-informed
                                practice.
                            </p>
                        </section>

                        <section id="navigation-note">
                            <h2>How to Navigate</h2>

                            <p>
                                Use the <strong>left-hand menu</strong> to
                                browse each CMALT section. Every page follows a
                                consistent structure so you can quickly see
                                context, reflection, and evidence of practice.
                            </p>

                            <ul>
                                <li>
                                    <strong>Description:</strong> concise
                                    context for the activity or work, including
                                    purpose, audience, and constraints.
                                </li>
                                <li>
                                    <strong>Reflection:</strong> what I learned,
                                    how my practice developed, and how this
                                    aligns with CMALT principles.
                                </li>
                                <li>
                                    <strong>Summary:</strong> a quick, scannable
                                    list of key outcomes and contributions.
                                </li>
                                <li>
                                    <strong>Evidence:</strong> split into themed
                                    groups (for example, Practical Application,
                                    Institutional Evaluation, Training &amp;
                                    Compliance) and ordered by importance. Each
                                    item includes a short note explaining why it
                                    matters and how it maps to the criteria.
                                </li>
                                <li>
                                    <strong>Further Reading:</strong> curated,
                                    topic-specific sources that underpin the
                                    section and offer routes to learn more.
                                    These aren&apos;t required to review the
                                    evidence, but they&apos;re helpful if
                                    you&apos;d like extra depth or to explore
                                    adjacent concepts.
                                </li>
                            </ul>

                            <p>
                                Where relevant, documents, screenshots, and
                                videos open in a new tab for ease of
                                verification. I&apos;ve prioritised clarity and
                                accessibility (plain English, descriptive link
                                text, and readable layouts) to support smooth
                                review.
                            </p>
                        </section>
                    </article>

                    {/* Context-aware pagination between CMALT pages */}
                    {(previous || next) && (
                        <PrevNextButtons
                            contextTitle="CMALT Pagination"
                            itemType="page"
                            previous={previous ?? undefined}
                            next={next ?? undefined}
                        />
                    )}
                </div>
                <CmaltSidebar />
            </div>

            {/* Footer CTA for contact and clarifications */}
            <ContactCta
                title="Questions about this section?"
                description="Contact me for clarifications or further evidence."
            />
        </>
    );
}
