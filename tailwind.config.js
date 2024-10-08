import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
// import typography from '@tailwindcss/typography';
import scrollbar from "tailwind-scrollbar"

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',

    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.{js,ts,json,vue}',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                '2xs': '.65rem',
            },
        },
    },

    variants: {
        extend: {
            /*opacity: ['disabled'],
            scale: ['active'],
            textColor: ['hover', 'active'],
            backgroundColor: ['active','odd','even'],
            fontWeight: ['hover', 'active', 'focus'],
            borderWidth: ['first', 'last', 'hover'],
            borderRadius: ['first', 'last'],
            boxShadow: ['dark'],
            padding: ['focus', 'hover'],
            zIndex: ['hover'],
            brightness: ['hover', 'focus']*/
        },
        scrollbar: ['dark']
    },

    plugins: [forms, scrollbar],
};
