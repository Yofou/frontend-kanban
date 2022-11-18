const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/.blade.php",
        "./storage/framework/views/.php",
        "./resources/views//*.blade.php",
        "./resources/js//*.vue",
    ],
    theme: {
        colors: {
            purple: {
                300: "#A8A4FF",
                600: "#635FC7",
            },
            red: {
                300: "#FF9898",
                600: "#EA5555",
            },
            black: {
                300: "#3E3F4E",
                600: "#2B2C37",
                900: "#20212C",
                1200: "#000112",
            },
            white: {
                300: "#FFFFFF",
                600: "#F4F7FD",
                900: "#E4EBFA",
                1200: "#828FA3",
            },
        },
        fontFamily: {
            jaka: ["'Plus Jakarta Sans'", "sans-serif"],
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
