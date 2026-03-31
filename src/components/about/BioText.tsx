/**
 * Renders the main biography text for the About page.
 *
 * Provides a multi-paragraph introduction covering professional
 * background, areas of expertise, side projects, and personal
 * interests. Styled with Tailwind’s `prose` classes for
 * readability and responsive typography.
 *
 * @returns The biography text section containing multiple descriptive paragraphs.
 */
export default function BioText() {
    return (
        <article className="md:col-span-2">
            <div className="prose max-w-prose text-slate-700 dark:text-slate-300">
                <p className="mb-4">
                    Hi, I&apos;m Karl, a software engineer from the UK.
                </p>
                <p className="mb-4">
                    I specialise in full-stack JavaScript and TypeScript —
                    building REST APIs, working with relational databases, and
                    shipping accessible web interfaces. Performance,
                    maintainability, and a11y aren&apos;t afterthoughts; they&apos;re
                    how I approach every project.
                </p>
                <p className="mb-4">
                    I&apos;ve built production projects with Node.js, Next.js,
                    React, and PostgreSQL, and I&apos;ve spent several years
                    working inside higher education institutions. That means I
                    bring genuine domain expertise in EdTech — I understand the
                    problems, not just the technology.
                </p>
                <p className="mb-4">
                    Right now I&apos;m building a public REST API for a
                    disability-friendly employers directory: FastAPI on AWS
                    Lambda, PostgreSQL with full-text search, Redis caching, and
                    Row Level Security. I&apos;m always working on something.
                </p>
                <p className="mb-4">
                    When I&apos;m not coding, I&apos;m writing, running, or
                    tinkering with some new open-source tools.
                </p>
            </div>
        </article>
    );
}
