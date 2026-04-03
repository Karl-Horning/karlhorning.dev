import Link from "next/link";
import { navLinks } from "@/lib/constants/ui";

/**
 * Desktop navigation menu component for larger viewports.
 *
 * @component
 * @returns The rendered desktop menu.
 */
export default function DesktopMenu() {
    return (
        <nav id="desktop-menu" aria-label="Desktop navigation" className="hidden items-center gap-3 md:flex">
            {navLinks.map(({ label, href }) => (
                <Link
                    key={label}
                    href={href}
                    className="rounded px-2 py-1 text-sm font-medium text-slate-700 transition hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-slate-300 dark:hover:text-primary dark:focus-visible:ring-offset-slate-900"
                >
                    {label}
                </Link>
            ))}
        </nav>
    );
}
