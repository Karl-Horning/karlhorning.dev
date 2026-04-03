import { navLinks } from "@/lib/constants/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

interface MobileMenuProps {
    isOpen?: boolean;
    onClose?: () => void;
}

/**
 * Mobile navigation menu component.
 *
 * Displays a collapsible mobile navigation panel with accessible attributes.
 *
 * @component
 * @param {MobileMenuProps} props - Menu visibility state and optional close handler.
 * @returns The rendered mobile menu.
 */
export default function MobileMenu({
    isOpen = false,
    onClose,
}: MobileMenuProps) {
    const pathname = usePathname();
    const containerRef = useRef<HTMLDivElement>(null);

    // Ensure the inert attribute is applied when closed (helps if TS/JSX doesn't know 'inert')
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        if (isOpen) {
            el.removeAttribute("inert");
            el.removeAttribute("aria-hidden");
        } else {
            el.setAttribute("inert", "");
            el.setAttribute("aria-hidden", "true");
        }
    }, [isOpen]);

    return (
        <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className={`glass absolute left-0 top-16 z-10 w-full overflow-hidden border-b border-slate-200/70 bg-white/80 shadow-md transition-[max-height] duration-500 ease-in-out md:hidden dark:border-slate-800 dark:bg-slate-950/70 ${
                isOpen
                    ? "pointer-events-auto max-h-screen"
                    : "pointer-events-none max-h-0"
            }`}
            ref={containerRef}
        >
            <div className="flex flex-col items-center space-y-8 px-4 py-8 text-center text-lg text-slate-900 dark:text-slate-100">
                {navLinks.map(({ label, href }) => (
                    <Link
                        key={label}
                        href={href}
                        aria-current={pathname === href ? "page" : undefined}
                        onClick={onClose}
                        // Remove from tab order while closed:
                        tabIndex={isOpen ? 0 : -1}
                        className={`rounded px-2 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 ${
                            pathname === href
                                ? "font-semibold text-primary"
                                : ""
                        }`}
                    >
                        {label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
