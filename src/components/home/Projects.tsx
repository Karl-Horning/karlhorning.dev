import { getProjectItems } from "@/lib/server";
import ProjectsCard from "@/components/projects/ProjectsCard";
import ButtonLink from "@/components/ui/ButtonLink";
import { icons, internalRoutes } from "@/lib/constants/ui";

const { ProjectsRoute } = internalRoutes;
const { ReadMoreIcon } = icons;

/**
 * Displays the "Recent projects" section of the site.
 *
 * Dynamically fetches the two most recent projects using `getProjectItems`
 * and renders them in a responsive layout of `ProjectsCard` components.
 * Each card includes a project title, description, screenshot,
 * related topics, and links to case studies or repositories.
 *
 * @async
 * @function
 * @returns A `<section>` element containing the recent projects heading,
 * project cards, and a link to view all available projects.
 */
export default async function Projects() {
    const recentProjectItems = await getProjectItems(2);

    return (
        <section id="myProjects" className="mx-auto max-w-6xl px-4 pt-20">
            <div className="flex items-center justify-between gap-6">
                <h2 className="text-2xl font-bold tracking-tight">
                    My projects
                </h2>
                <ButtonLink
                    text="View projects"
                    href={ProjectsRoute}
                    icon={<ReadMoreIcon />}
                    type="secondary"
                />
            </div>
            {recentProjectItems.map(({ title, ...props }, index) => (
                <ProjectsCard
                    key={title}
                    title={title}
                    reverse={index % 2 === 1}
                    {...props}
                />
            ))}
        </section>
    );
}
