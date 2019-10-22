//postcss.config.js
const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('tailwind.config.js'),
        require('autoprefixer'),
        // require('@fullhuman/postcss-purgecss')({
        //     content: [
        //         '.s'
        //     ]
        // })
    ],
};