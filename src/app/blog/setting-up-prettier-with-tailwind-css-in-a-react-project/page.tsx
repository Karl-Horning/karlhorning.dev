import BlogLayout from "@/components/layouts/BlogLayout";
import { meta } from "./meta";
import {
    htmlExample,
    nextOptions,
    prettierConfig,
    viteConfig,
} from "./examples";
import { createMetadata } from "@/lib/helpers";
import { internalRoutes } from "@/lib/constants/ui";

const { BlogRoute } = internalRoutes;

export const metadata = createMetadata({
    title: `${meta.title} | Blog`,
    path: `${BlogRoute}/${meta.slug}`,
});

export default function Page() {
    return (
        <BlogLayout {...meta}>
            <p>
                This is the setup I reach for at the start of every new React
                project. Getting Prettier and Tailwind CSS working together
                requires one specific step that&apos;s easy to forget — so here
                it is documented once, clearly.
            </p>
            <blockquote>
                <p>
                    I usually create the GitHub repo first and clone it locally,
                    so I initialise Next.js or Vite in an existing folder. If
                    you&apos;re doing the same, use the <code>.</code> at the
                    end of your command to scaffold into the current directory.
                </p>
            </blockquote>
            <h2>Next.js</h2>
            <pre>
                <code className="language-bash">
                    npx create-next-app@latest .
                </code>
            </pre>
            <p>Here are the options I usually pick:</p>
            <pre className="overflow-x-auto">
                <code className="language-bash whitespace-pre-wrap">
                    {nextOptions}
                </code>
            </pre>
            <p>
                Once that&apos;s done, install Prettier and the Tailwind plugin:
            </p>
            <pre>
                <code className="language-bash">
                    npm install -D prettier prettier-plugin-tailwindcss
                </code>
            </pre>
            <p>
                Then add the following config to the bottom of your{" "}
                <code>package.json</code>:
            </p>
            <pre>
                <code className="language-json">{prettierConfig}</code>
            </pre>
            <p>
                Prettier will now sort your Tailwind classes automatically on
                format. (<code>Option + Shift + F</code> on macOS.)
            </p>
            <h2>Vite</h2>
            <p>
                The Prettier config is identical. The only difference is how
                Tailwind is set up.
            </p>
            <p>Install Tailwind CSS and its Vite plugin:</p>
            <pre>
                <code className="language-bash">
                    npm install tailwindcss @tailwindcss/vite
                </code>
            </pre>
            <p>
                Import the plugin in your <code>vite.config.ts</code>:
            </p>
            <pre>
                <code className="language-ts">{viteConfig}</code>
            </pre>
            <p>
                Import Tailwind in your main stylesheet (for example,{" "}
                <code>src/style.css</code>):
            </p>
            <pre>
                <code className="language-css">
                    @import &quot;tailwindcss&quot;;
                </code>
            </pre>
            <p>
                Make sure your compiled CSS is loaded in your HTML or app entry:
            </p>
            <pre>
                <code className="language-html">{htmlExample}</code>
            </pre>
            <p>
                If you&apos;re using VS Code, install the Prettier extension and
                enable format-on-save — it will handle class sorting
                automatically.
            </p>
            <p>— Karl</p>
        </BlogLayout>
    );
}
