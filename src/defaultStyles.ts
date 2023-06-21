import {blue, purple} from "./common/commonColors.ts";

const linearGradient = `linear-gradient(to bottom, ${blue} 0%, ${purple} 50%, ${blue}) 100%`;

export default {
    '@global': {
        'body, #root': {
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            background: `${linearGradient}`,
            margin: '0'
        },
        '@font-face': [
            {
                fontFamily: 'retro',
                src: 'url(./src/fonts/due-form.otf) format(openType)',
                fontWeight: 'regular',
            },
        ],
    }
}