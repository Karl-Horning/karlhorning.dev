import Image from "next/image";
import Pill from "../ui/Pill";

interface ExperienceCardProps {
    /**
     * The date range for the experience entry (for example, "2022-2024").
     */
    dates: string;

    /**
     * The job title held during this experience.
     */
    jobTitle: string;

    /**
     * The employer or organisation name.
     */
    employer: string;

    /**
     * The location of the role (for example, "London, UK").
     */
    location: string;

    /**
     * A short highlight or key skill/tag displayed in a pill.
     */
    highlight: string;

    /**
     * A longer description providing more detail about the role.
     */
    description: string;

    /**
     * Tailwind CSS class applied to the pill text colour.
     * Defaults to `"text-slate-800 dark:text-slate-200"`.
     */
    mainColour?: string;

    /**
     * Tailwind CSS class applied to the pill background colour.
     * Defaults to `"bg-slate-200 dark:bg-slate-800"`.
     */
    bgColour?: string;

    /**
     * Path or URL to the image representing the role.
     */
    image: string;
}

/**
 * Renders a card component representing a single work experience entry.
 *
 * Each card contains:
 * - A date range
 * - A job title, employer, and location
 * - A highlight displayed as a `Pill`
 * - A descriptive paragraph about the role
 *
 * Commonly used in a CV, portfolio, or "Experience" section.
 *
 * @param props - The properties for the ExperienceCard component.
 * @param props.dates - The date range of the experience entry.
 * @param props.jobTitle - The job title for this role.
 * @param props.employer - The employer or organisation name.
 * @param props.location - The location of the role.
 * @param props.highlight - A key skill, tag, or achievement displayed in a pill.
 * @param props.description - A longer description of the role.
 * @param props.mainColour - Tailwind class for pill text colour.
 * @param props.bgColour - Tailwind class for pill background colour.
 * @param props.image - The image representing the role.
 * @returns A styled `<li>` element containing the experience entry.
 */
export default function ExperienceCard({
    dates,
    description,
    employer,
    highlight,
    jobTitle,
    location,
    mainColour = "text-slate-800 dark:text-slate-200",
    bgColour = "bg-slate-200 dark:bg-slate-800",
    image,
}: ExperienceCardProps) {
    return (
        <li className="grid items-center gap-4 p-4 md:grid-cols-[auto_1fr_auto]">
            <Image
                src={image}
                alt=""
                height={160}
                width={160}
                className="order-1 h-16 w-16 rounded-lg object-contain p-1"
            />

            <div className="order-2">
                <p className="text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    {dates}
                </p>
                <p className="font-semibold">
                    {jobTitle} &bull; {employer} &bull; {location}
                </p>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                    {description}
                </p>
            </div>
            <div className="order-3">
                <Pill
                    text={highlight}
                    className="text-xs"
                    bgColour={bgColour}
                    mainColour={mainColour}
                />
            </div>
        </li>
    );
}
