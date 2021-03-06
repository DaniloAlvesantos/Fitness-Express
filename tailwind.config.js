const { urlObjectKeys } = require("next/dist/shared/lib/utils");

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "footer": "url('/wave01.svg')",
                "wave-block": "url('/wave-block.svg')",
                "blob-scene": "url('/blob-scene-haikei.svg')"
            },
            screens: {
                "4k": { 'max': '1535px' },
                "extra-large": { 'max': '1279px' },
                "large": { 'max': '1023px' },
                "medium": { 'max': '767px' },
                "medium-sm": {'max': '600px'},
                "screen-680": {'max': '680px'},
                "mobile-small": {'max': '500px'},
                "screen-375": {'max': '375px'},
                "mobile-sm": { 'max': '380px'},
            },
            borderRadius: {
                "l-no": '10px 10px 10px 1px',
            },
            boxShadow: {
                "customized": '1px 2px 10px 2px #00000068',
            },
            gridTemplateColumns: {
                "250-1fr": 'repeat(auto-fit, minmax(250px, 1fr))',
                "300-0fr": 'repeat(auto-fit, minmax(300px, 0fr))'
            },
            fontFamily: {
                "Open_Sans":['Open Sans', 'sans-serif']
            }
        },
    },
    plugins: [
        require('tailwind-scrollbar')
    ],
    variants: {
        scrollbar: ['rounded']
    }
};
