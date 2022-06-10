module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./containers/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "sea-green": "hsl(152,63%,43%)",
                "honey-dew": "hsl(152, 48%, 89%)",

                "sapphire-blue": "hsl(211,100%,35%)",
                "carolina-blue": "hsl(204, 91%, 53%)",
                "jeans-blue": "hsl(204, 80%, 63%)",
                "columbia-blue": "hsl(204, 92%, 90%)",
                "alice-blue-1": "hsl(216, 38%, 95%)",
                "alice-blue-2": "hsl(216, 75%, 97%)",
                "alice-blue-3": "hsl(216, 38%, 95%)",
                "alice-blue-4": "hsl(217, 33%, 92%)",
                "slate-blue": "hsl(262, 60%, 57%)",
                "beau-blue": "hsl(208, 86%, 92%)",

                "mimi-pink": "hsl(329, 63%, 90%)",
                "cerise-pink": "hsl(329, 63%, 52%)",

                "salsa-red": "hsl(0, 79%, 63%)",

                lavender: "hsl(336, 35%, 92%)",
                purple: "hsl(262,63%,92%)",
                black: "hsl(210,11%,15%)",
                cadet: "hsl(240, 22%, 25%)",
                independence: "hsl(219, 21%, 39%)",
                manatee: "hsl(219, 14%, 60%)",
                white: "hsl(0,0%,100%)",
            },

            boxShadow: {
                "shadow-1": "3px 3px 9px hsla(240, 14%, 69%, 0.2)",
                "shadow-2": "3px 3px 9px hsla(204, 92%, 59%, 0.3)",
            },

            gridTemplateColumns: {
                "custom-1": "repeat(auto-fit, minmax(250px, 1fr))",
            },
        },
        fontSize: {
            xs: ".625rem",
            sm: ".875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.375rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.125rem",
            "5xl": "3rem",
            "6xl": "4rem",
            "7xl": "5rem",
        },
    },
    plugins: [],
};
