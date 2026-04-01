import Image from "next/image";
import ButtonLink from "./ButtonLink";
import {
    assets,
    externalLinks,
    icons,
    internalRoutes,
} from "@/lib/constants/ui";

const { CoffeeIcon, ContactIcon } = icons;
const { KofiLink } = externalLinks;
const { ContactRoute } = internalRoutes;
const { profileImage } = assets;

/**
 * Displays an author information card with profile image,
 * bio text, and quick action links.
 *
 * Typically used at the end of blog posts or on about pages
 * to introduce the site owner and provide ways to connect or support.
 *
 * @remarks
 * The component includes:
 * - A profile photo (using `next/image` for optimisation)
 * - A short author description
 * - Buttons linking to Ko-fi for support and the contact page for collaboration
 *
 * Styled with Tailwind CSS and supports both light and dark themes.
 *
 * @component
 * @returns An `<aside>` element containing author info and call-to-action links.
 */
export default function AuthorCard() {
    return (
        <aside className="pt-10">
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm sm:flex-row sm:text-left dark:border-slate-800 dark:bg-slate-900">
                <Image
                    src={profileImage}
                    alt=""
                    className="h-32 w-32 rounded-2xl border border-slate-200 bg-primary object-cover dark:border-slate-800"
                    height={64}
                    width={64}
                />
                <div>
                    <p className="font-semibold">Karl Horning</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                        Full-stack JS/TS developer — I
                        build accessible, pragmatic tools.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        <ButtonLink
                            href={KofiLink}
                            text="Support on Ko-fi"
                            icon={<CoffeeIcon />}
                            className="w-full sm:w-auto"
                        />
                        <ButtonLink
                            href={ContactRoute}
                            text="Get in touch"
                            icon={<ContactIcon />}
                            type="secondary"
                            className="w-full sm:w-auto"
                        />
                    </div>
                </div>
            </div>
        </aside>
    );
}
