import { NavLink } from "@/types";
import { internalRoutes } from "./internal.routes";

/**
 * Navigation link configuration for the site header and menu.
 *
 * Combines internal and external URLs for easy reuse in
 * navigation components.
 */
export const navLinks = [
    { label: "About", href: internalRoutes.AboutRoute },
    { label: "Blog", href: internalRoutes.BlogRoute },
    { label: "Projects", href: internalRoutes.ProjectsRoute },
    { label: "Demos", href: internalRoutes.DemosRoute },
    { label: "Contact", href: internalRoutes.ContactRoute },
] satisfies readonly NavLink[];
