export default {
    theme: {
        extend: {
            colors: {
                base: {
                    100: "var(--color-base-100)",
                    200: "var(--color-base-200)",
                    300: "var(--color-base-300)",
                    content: "var(--color-base-content)",
                },
                primary: "var(--color-primary)",
                secondary: "var(--color-secondary)",
                accent: "var(--color-accent)",
                "gradient-header": "var(--gradient-header)",
            },
            borderRadius: {
                selector: "var(--radius-selector)",
                field: "var(--radius-field)",
                box: "var(--radius-box)",
            },
            backgroundImage: {
                "gradient-glow-top": "var(--gradient-glow-top)",
                "nav-background": "var(--nav-background)",
            },
        },
    },
};
