const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  important: '#root',
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--hb-border))",
        input: "hsl(var(--hb-input))",
        ring: "hsl(var(--hb-ring))",
        background: "hsl(var(--hb-background))",
        foreground: "hsl(var(--hb-foreground))",
        primary: {
          DEFAULT: "hsl(var(--hb-primary))",
          foreground: "hsl(var(--hb-primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--hb-secondary))",
          foreground: "hsl(var(--hb-secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--hb-destructive))",
          foreground: "hsl(var(--hb-destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--hb-muted))",
          foreground: "hsl(var(--hb-muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--hb-accent))",
          foreground: "hsl(var(--hb-accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--hb-popover))",
          foreground: "hsl(var(--hb-popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--hb-card))",
          foreground: "hsl(var(--hb-card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--hb-radius)",
        md: "calc(var(--hb-radius) - 2px)",
        sm: "calc(var(--hb-radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-animate")
  ],
}