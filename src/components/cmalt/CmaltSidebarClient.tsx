"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CmaltTopList } from "./CmaltTopList";
import { CmaltSectionGroup } from "./CmaltSectionGroup";
import { CmaltNavLink } from "@/types";

/**
 * Grouped CMALT navigation data.
 *
 * - `top` contains top-level pages (for example, homepage, contextual statement).
 * - `sections` contains collapsible “Section N” groups and their items.
 */
type Grouped = {
    top: CmaltNavLink[];
    sections: {
        label: string;
        key: `section-${number}`;
        items: CmaltNavLink[];
    }[];
};

/**
 * Client-side sidebar for CMALT pages.
 *
 * Highlights the active link based on the current path and
 * auto-expands the section that contains the active page.
 *
 * @param props - Component properties.
 * @param props.grouped - Pre-grouped CMALT navigation data (top items + section buckets).
 * @returns A navigational sidebar with active states and collapsible sections.
 */
export default function CmaltSidebarClient({ grouped }: { grouped: Grouped }) {
    const pathname = usePathname();

    /**
     * Normalises a pathname or href by removing a trailing slash (except root).
     */
    const norm = (s: string) =>
        s && s !== "/" && s.endsWith("/") ? s.slice(0, -1) : s;

    const current = norm(pathname || "/");

    /**
     * Determines whether a link is active.
     *
     * - Exact links (for example, homepage) must match exactly.
     * - Non-exact links are active for the page itself and nested routes.
     */
    const isActive = (href: string, isExact: boolean) => {
        const target = norm(href);
        return isExact
            ? current === target
            : current === target || current.startsWith(`${target}/`);
    };

    // Collapsible state: open the section that contains the current page.
    const [open, setOpen] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const initial: Record<string, boolean> = {};
        for (const g of grouped.sections) {
            initial[g.key] = g.items.some(({ href, isExact }) =>
                isActive(href, isExact)
            );
        }
        // Merge computed defaults with any user toggles already made.
        setOpen((prev) => ({ ...initial, ...prev }));
        // Depend on counts + path only to avoid re-toggling.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [grouped.sections.length, current]);

    /** Toggles a section's expanded/collapsed state. */
    const toggle = (key: string) => setOpen((s) => ({ ...s, [key]: !s[key] }));

    if (!grouped.top.length && !grouped.sections.length) return null;

    return (
        <nav className="toc space-y-4 text-sm" aria-label="CMALT Portfolio">
            {grouped.top.length > 0 && (
                <CmaltTopList items={grouped.top} isActive={isActive} />
            )}

            {grouped.sections.map(({ label, key, items }) => (
                <CmaltSectionGroup
                    key={key}
                    id={`${key}-panel`}
                    label={label}
                    items={items}
                    expanded={!!open[key]}
                    onToggle={() => toggle(key)}
                    isActive={isActive}
                />
            ))}
        </nav>
    );
}
