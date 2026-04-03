import { ReactNode } from "react";
import { icons } from "@/lib/constants/ui";
import ButtonLink from "./ButtonLink";
import { decorateIcon } from "@/lib/helpers";

const { ProjectIcon } = icons;

/**
 * Configuration for Call-To-Action (CTA) buttons used in {@link PageIntroSplit}.
 *
 * Defines link destination, label text, optional icon, and visual style.
 */
interface Cta {
    /** Destination URL for the button. */
    href: string;

    /** Visible text label displayed on the button. */
    text: string;

    /** Optional icon element shown before the text label. */
    icon?: ReactNode;

    /** Button style variant (defaults to `"primary"`). */
    type?: "primary" | "secondary";
}

/**
 * Props for the {@link PageIntroSplit} component.
 *
 * Used to configure headings, layout, icons, and call-to-action buttons
 * in a split hero-style subpage header.
 */
interface PageIntroSplitProps {
    /** Main heading (rendered as an `<h1>`). */
    title: string;

    /** Supporting paragraph text below the title. */
    leadParagraph: ReactNode;

    /** Optional small label or category shown above the title. */
    tagline?: string;

    /** (Intentionally unused, kept for API compatibility.) */
    highlights?: string[];

    /** Decorative icon element (defaults to {@link ProjectIcon}). */
    heroIcon?: ReactNode;

    /** Configuration for the main CTA button. */
    primaryCta?: Cta;

    /** Configuration for the secondary CTA button. */
    secondaryCta?: Cta;

    /** Side of the layout where the large icon appears (default: `"right"`). */
    iconSide?: "left" | "right";

    /** Optional section `id` attribute (default: `"page-intro"`). */
    id?: string;
}

/**
 * Renders a split-page introductory section with a decorative icon, heading, and optional CTAs.
 *
 * The component adapts layout and visibility depending on viewport size:
 *
 * - On **mobile**, text and CTAs are centred, and the large hero icon is hidden.
 *   A smaller inline icon appears beside the tagline for visual continuity.
 * - On **desktop**, layout shifts to a two-column grid with the hero icon shown
 *   either on the left or right (controlled by `iconSide`).
 *
 * Commonly used as a subpage header for secondary sections such as
 * "Projects", "Blog", or "Portfolio" pages.
 *
 * @param props - Component properties.
 * @param props.title - The main heading text.
 * @param props.leadParagraph - Supporting text paragraph under the heading.
 * @param props.tagline - Optional small label displayed above the title.
 * @param props.heroIcon - Decorative icon element (defaults to {@link ProjectIcon}).
 * @param props.primaryCta - Configuration for the primary CTA button.
 * @param props.secondaryCta - Configuration for the secondary CTA button.
 * @param props.iconSide - Layout side of the decorative icon (`"left"` or `"right"`; default `"right"`).
 * @param props.id - Optional section ID for linking (default: `"page-intro"`).
 * @returns A responsive split header section with decorative icon and CTAs.
 *
 * @example
 * ```tsx
 * <PageIntroSplit
 *   title="My Projects"
 *   leadParagraph="A selection of personal and professional work."
 *   tagline="Portfolio"
 *   primaryCta={{ href: "/projects", text: "View all projects" }}
 *   secondaryCta={{ href: "/contact", text: "Get in touch" }}
 *   iconSide="left"
 * />
 * ```
 */
export default function PageIntroSplit({
    title,
    leadParagraph,
    tagline,
    heroIcon,
    primaryCta,
    secondaryCta,
    iconSide = "right",
    id = "page-intro",
}: PageIntroSplitProps) {
    // Decorative icon panel (hidden on mobile; shown from md: breakpoint)
    const IconPanel = (
        <div className="order-1 hidden md:order-2 md:flex md:justify-end">
            <div
                className="relative flex items-center justify-center rounded-3xl bg-primary/10 p-8 text-primary shadow-md"
                aria-hidden="true"
            >
                <div className="text-[12rem]">
                    {decorateIcon(heroIcon) ?? <ProjectIcon />}
                </div>
            </div>
        </div>
    );

    // Text and CTAs block (centred on mobile, left-aligned on desktop)
    const Copy = (
        <div className="order-2 text-center md:order-1 md:text-left">
            {tagline && (
                <span
                    className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary md:justify-start dark:text-pink-500"
                >
                    {/* Small decorative icon appears only on mobile */}
                    <span
                        className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 text-primary md:hidden"
                        aria-hidden="true"
                    >
                        <span className="text-[0.9rem] leading-none">
                            {heroIcon ?? <ProjectIcon />}
                        </span>
                    </span>
                    {tagline}
                </span>
            )}

            <h1 className="mt-2 text-pretty text-4xl font-extrabold tracking-tight sm:text-5xl">
                {title}
            </h1>

            <p className="mx-auto mt-4 max-w-prose text-lg leading-relaxed text-slate-700 md:mx-0 dark:text-slate-300">
                {leadParagraph}
            </p>

            {(primaryCta || secondaryCta) && (
                <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
                    {primaryCta && (
                        <ButtonLink
                            href={primaryCta.href}
                            text={primaryCta.text}
                            icon={primaryCta.icon}
                        />
                    )}
                    {secondaryCta && (
                        <ButtonLink
                            href={secondaryCta.href}
                            text={secondaryCta.text}
                            icon={secondaryCta.icon}
                            type="secondary"
                        />
                    )}
                </div>
            )}
        </div>
    );

    return (
        <section id={id} className="hero-bg">
            <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2 lg:py-24">
                {iconSide === "left" ? (
                    <>
                        {IconPanel}
                        {Copy}
                    </>
                ) : (
                    <>
                        {Copy}
                        {IconPanel}
                    </>
                )}
            </div>
        </section>
    );
}
