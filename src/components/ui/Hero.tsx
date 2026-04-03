import { assets, icons, internalRoutes } from "@/lib/constants/ui";
import Image from "next/image";
import ButtonLink from "./ButtonLink";

const { profileImage } = assets;
const { ContactIcon, ProjectIcon } = icons;
const { ContactRoute, ProjectsRoute } = internalRoutes;

interface HeroProps {
    /**
     * Main heading text for the hero section.
     */
    title: string;

    /**
     * Supporting paragraph displayed beneath the title.
     */
    leadParagraph: string;

    /**
     * Identity-defining phrase displayed above the title.
     */
    tagline?: string;
}

/**
 * Hero section component.
 *
 * Serves as the introductory section at the top of the site,
 * containing a main heading, supporting text, a set of highlights,
 * call-to-action buttons, and a profile image.
 *
 * Features:
 * - Prominent title and lead paragraph
 * - Highlights rendered as styled `Pill` components
 * - Primary and secondary `ButtonLink` call-to-actions
 * - Profile image with decorative border and subtle ring
 *
 * Accessibility:
 * - Profile image is marked `aria-hidden` and has empty alt text,
 *   as it is decorative
 * - Call-to-action buttons include icons but remain text-labelled
 *
 * @param props - The hero section properties.
 * @param props.title - Main heading displayed in the hero.
 * @param props.leadParagraph - Supporting paragraph shown below the title.
 * @param props.highlights - Short highlight phrases displayed as pills.
 * @returns A styled `<section>` element containing the hero content.
 */
export default function Hero({ title, leadParagraph, tagline }: HeroProps) {
    return (
        <section id="hero" className="hero-bg">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 py-20 md:flex-row lg:py-24">
                <div className="order-2 md:order-1">
                    {tagline && (
                        <span
                            className="text-sm font-semibold uppercase text-primary dark:text-pink-500"
                        >
                            {tagline}
                        </span>
                    )}
                    <h1 className="mt-2 text-pretty text-4xl font-extrabold tracking-tight sm:text-5xl">
                        {title}
                    </h1>
                    <p className="mt-3 max-w-prose text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                        {leadParagraph}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <ButtonLink
                            href={`${ContactRoute}#contactForm`}
                            text="Get in touch"
                            icon={<ContactIcon />}
                        />

                        <ButtonLink
                            href={`${ProjectsRoute}/#recentProjects`}
                            text="Recent projects"
                            icon={<ProjectIcon />}
                            type="secondary"
                        />
                    </div>
                </div>
                <div className="order-1 md:order-2">
                    <div className="relative mx-auto aspect-square w-64 overflow-hidden rounded-3xl border border-slate-200 shadow-md md:w-80 dark:border-slate-800">
                        <Image
                            src={profileImage}
                            alt=""
                            className="pointer-events-none h-full w-full select-none bg-[var(--primary)] object-cover object-top"
                            aria-hidden="true"
                            priority={true}
                            width={960}
                            height={960}
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5 dark:ring-white/10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
