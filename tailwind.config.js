
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Font Families
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["DM Sans", "sans-serif"],
      },

      // Custom Colors
      colors: {
        // Primary Brand Colors
        bodyColor: "#212428",
        lightText: "#c4cfde",
        designColor: "#ff014f",
        primeColor: "#ff014f",

        // Background Colors
        lightBg: "#f9f9f9",
        darkBg: "#0f172a", // slate-950
        footerBg: "#F5F5F3",
        profileBg: "#171717",

        // Accent Colors
        accentPink: "#ff014f",
        accentDark: "#080312",
        accentLight: "#afffff",

        // Neutral Shades (complementing Tailwind's grays)
        customGray: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },

      // Box Shadows
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
        cardShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        cardHover: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        buttonShadow: "10px 10px 20px rgba(0, 0, 0, 0.6)",
      },

      // Spacing (if needed for custom spacing)
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },

      // Border Radius
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },

      // Animation
      animation: {
        'slide-vertical': 'slideVertical 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-in-out',
      },

      // Keyframes
      keyframes: {
        slideVertical: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },

      // Z-index
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}
