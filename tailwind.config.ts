import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        tag: {
          government: "hsl(var(--tag-government))",
          "government-text": "hsl(var(--tag-government-text))",
          healthcare: "hsl(var(--tag-healthcare))",
          "healthcare-text": "hsl(var(--tag-healthcare-text))",
          science: "hsl(var(--tag-science))",
          "science-text": "hsl(var(--tag-science-text))",
          technology: "hsl(var(--tag-technology))",
          "technology-text": "hsl(var(--tag-technology-text))",
          philanthropy: "hsl(var(--tag-philanthropy))",
          "philanthropy-text": "hsl(var(--tag-philanthropy-text))",
          politics: "hsl(var(--tag-politics))",
          "politics-text": "hsl(var(--tag-politics-text))",
          economics: "hsl(var(--tag-economics))",
          "economics-text": "hsl(var(--tag-economics-text))",
          finance: "hsl(var(--tag-finance))",
          "finance-text": "hsl(var(--tag-finance-text))",
          media: "hsl(var(--tag-media))",
          "media-text": "hsl(var(--tag-media-text))",
          ecommerce: "hsl(var(--tag-ecommerce))",
          "ecommerce-text": "hsl(var(--tag-ecommerce-text))",
          social: "hsl(var(--tag-social))",
          "social-text": "hsl(var(--tag-social-text))",
          international: "hsl(var(--tag-international))",
          "international-text": "hsl(var(--tag-international-text))",
        },
        category: {
          all: "hsl(var(--category-all))",
          politicians: "hsl(var(--category-politicians))",
          business: "hsl(var(--category-business))",
          media: "hsl(var(--category-media))",
          scientists: "hsl(var(--category-scientists))",
          academics: "hsl(var(--category-academics))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
