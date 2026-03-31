import Hero from "@/components/ui/Hero";
import Highlights from "@/components/home/Highlights";
import Skills from "@/components/home/Skills";
import Blog from "@/components/home/Blog";
import ContactCta from "@/components/ui/ContactCta";
import { createMetadata } from "@/lib/helpers";
import { internalRoutes } from "@/lib/constants/ui";
import Projects from "@/components/home/Projects";

const { HomeRoute } = internalRoutes;

export const metadata = createMetadata({
    title: "Home",
    path: HomeRoute,
});

export default function Home() {
    return (
        <>
            <Hero
                title="Building accessible products for real people"
                leadParagraph="I ship practical, human-centred solutions with performance and a11y in mind."
                tagline="Full-Stack TypeScript & JavaScript"
            />
            <Highlights />
            <Skills />
            <Projects />
            <Blog />
            <ContactCta />
        </>
    );
}
