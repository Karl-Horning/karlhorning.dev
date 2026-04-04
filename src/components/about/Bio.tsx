import BioSidebar from "./BioSidebar";
import BioText from "./BioText";

/**
 * Combines the biography text and sidebar into a single section.
 *
 * Displays the main bio narrative alongside an "At a glance" sidebar,
 * arranged in a responsive grid layout (one column on mobile, three
 * columns on medium+ screens). Used on the About page as the primary
 * biography section.
 *
 * @returns The biography section containing text and sidebar components.
 */
export default function Bio() {
    return (
        <section className="mx-auto max-w-6xl px-4 pt-20">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <BioText />
                <BioSidebar />
            </div>
        </section>
    );
}
