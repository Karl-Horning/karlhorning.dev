import { PropsWithChildren } from "react";
import CmaltSidebar from "@/components/cmalt/CmaltSidebar";
import ContactCta from "@/components/ui/ContactCta";
import EntryHeader from "@/components/ui/EntryHeader";
import { getPrevNextCmalt } from "@/lib/server";
import PrevNextButtons from "@/components/ui/PrevNextButtons";
import { CmaltPage } from "@/types";
import ButtonLink from "@/components/ui/ButtonLink";
import { icons, internalRoutes } from "@/lib/constants/ui";

const { HigherEducationIcon, ReadMoreIcon } = icons;
const { CmaltRoute } = internalRoutes;

/**
 * Props for the {@link CmaltLayout} component.
 *
 * Extends {@link CmaltPage} to include `children`,
 * allowing each CMALT page to render unique body content.
 */
type CmaltLayoutProps = PropsWithChildren<CmaltPage>;

/**
 * Layout wrapper for CMALT portfolio pages.
 *
 * Provides a consistent layout that includes:
 * - A page header with metadata and back-navigation
 * - A sidebar for contextual CMALT navigation
 * - The main content area (populated by individual pages)
 * - Previous/Next pagination buttons
 * - A footer call-to-action encouraging contact
 *
 * This component is asynchronous because it fetches
 * pagination data via {@link getPrevNextCmalt}.
 *
 * @async
 * @param props - Component properties.
 * @param props.title - The page title shown in the header.
 * @param props.description - Short summary of the CMALT section.
 * @param props.date - The ISO 8601 date of publication or update.
 * @param props.readingTime - Estimated reading time in minutes.
 * @param props.slug - The URL slug for the current CMALT section.
 * @param props.children - Page content to render inside the main area.
 * @returns A structured layout for CMALT portfolio pages.
 */
export default async function CmaltLayout({
    title,
    description,
    date,
    readingTime,
    slug,
    children,
}: CmaltLayoutProps) {
    // Retrieve previous and next CMALT pages for pagination controls
    const { previous, next } = await getPrevNextCmalt(slug);
    const nextHref = next?.href ?? CmaltRoute;

    return (
        <main id="main">
            <EntryHeader
                title={title}
                description={description}
                date={date}
                readingTime={readingTime}
                includeKofiButton={false}
                actions={
                    next ? (
                        <ButtonLink
                            text="Go to next page"
                            type="secondary"
                            href={nextHref}
                            icon={<ReadMoreIcon />}
                        />
                    ) : (
                        <ButtonLink
                            text="Back to CMALT index"
                            type="secondary"
                            href={CmaltRoute}
                            icon={<HigherEducationIcon />}
                        />
                    )
                }
            />

            {/* Two-column grid: Sidebar + main content */}
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pt-20 md:grid-cols-[16rem_1fr]">
                <div className="order-2 max-w-3xl">
                    <article className="prose prose-slate dark:prose-invert max-w-none">
                        {children}
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
        </main>
    );
}
