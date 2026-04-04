import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/lib/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                glitch: ['"Rubik Glitch"', "cursive"],
            },
            colors: {
                black: "#2d292d",
                "custom-red": "#da4453",
                primary: "#cb2d6f", // vibrant pink/red
                secondary: "#3c7da4", // light: #3c7da4, dark: #4c9dcd (via CSS var --secondary)
                navy: "#163753",
                accent: "#14a098", // teal accent
                highlight: "#148aad", // teal for emphasis
                background: "#0f292f", // main background
                "background-subtle": "#254c4f", // slight contrast
                surface: "#1a3b3d", // card background
                hero: "#0b1d21", // strong background (header/hero)
                text: "#cccccc", // default light text
                muted: "#b3b3b3", // for secondary text, icons etc.
            },
        },
    },
    darkMode: "media",
    safelist: [
        "bg-amber-600",
        "bg-blue-700",
        "bg-blue-900",
        "bg-green-700",
        "bg-orange-700",
        "bg-pink-700",
        "bg-violet-800",
        "bg-yellow-600",
        "text-orange-400",
        "text-sky-500",
        "text-yellow-400",
        "text-custom-red",
    ],
};
export default config;
