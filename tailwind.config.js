import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                maven: ["Maven Pro", "sans-serif"],
            },
            colors: {
                siteGreen: "#20B15A",
                lightGreen: "#F0FDF4",
                softGreen: "#18c35c",
                lightGreen: "#D7F5DC",
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
