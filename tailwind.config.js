module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                bg: "var(--bg-color)",
                text: "var(--text-color)",
                card: "var(--card-bg)",
                primary: "var(--primary-color)",
            },
        },
    },
    plugins: [],
};
