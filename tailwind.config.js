const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            colors: {
                current: 'currentColor',
                transparent: 'transparent',

                black: '#000',
                white: '#fff',

                primary: {
                  light: '#F49757',
                  DEFAULT: '#F49739',
                  dark: '#D6791B',
                },

                secondary: {
                  light: '#FFED49',
                  DEFAULT: '#FFCF2B',
                  dark: '#FFCF0D',
                },

                tetriary: {
                  light: '#221E6B',
                  DEFAULT: '#04004D',
                  dark: '#00002F',
                },

                dark: {
                  DEFAULT: '#323232',
                },

                grey: {
                  DEFAULT: '#C4C4C4',
                },

                light: {
                  DEFAULT: '#F5F5F5',
                },
                ...defaultTheme.colors
            },
            fontFamily: {
                body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                heading: '"Sen", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            },
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
