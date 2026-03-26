import { getCmaltNav } from "@/lib/server";
import CmaltSidebarClient from "./CmaltSidebarClient";

/**
 * Server component that renders the CMALT sidebar navigation.
 *
 * Fetches grouped navigation data using {@link getCmaltNav}
 * and passes it to the client-side sidebar component for rendering.
 *
 * The sidebar remains sticky on larger screens and provides
 * context-aware navigation for the CMALT portfolio pages.
 *
 * @async
 * @returns The CMALT sidebar navigation with header and grouped links.
 */
export default async function CmaltSidebar() {
    // Fetch pre-grouped navigation data for CMALT pages.
    const grouped = await getCmaltNav();

    return (
        <aside
            aria-label="CMALT navigation"
            className="sticky top-[4.5rem] order-1 hidden max-h-[calc(100vh-6rem)] overflow-auto rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:block dark:border-slate-800 dark:bg-slate-900"
        >
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
                CMALT Portfolio
            </h3>

            {/* Client component handles active link highlighting and section toggling */}
            <CmaltSidebarClient grouped={grouped} />
        </aside>
    );
}
