import "./styles/globals.css";
import Footer from "@/components/shell/Footer";
import { jsonLdHome } from "@/lib/constants/site-metadata";
import Header from "@/components/shell/Header";
import { externalLinks } from "@/lib/constants/ui";

const { RssLink } = externalLinks;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className="scroll-smooth"
        >
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLdHome),
                    }}
                />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/android-chrome-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="512x512"
                    href="/android-chrome-512x512.png"
                />
                <link
                    rel="alternate"
                    type="application/rss+xml"
                    title="Karl Horning's Blog"
                    href={RssLink}
                />
            </head>
            <body className="flex min-h-screen flex-col bg-slate-50  font-sans text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
                <a
                    href="#main"
                    className="sr-only rounded bg-primary px-4 py-2 text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50"
                >
                    Skip to content
                </a>
                <Header />
                <main id="main" className="flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
