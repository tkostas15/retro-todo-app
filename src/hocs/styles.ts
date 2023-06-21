import {cyan, lightPink} from "../common/commonColors.ts";

export default {
    retroFont: {
        background: `linear-gradient(to bottom, ${lightPink}, ${cyan})`,
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
    },
    gradientBorderWrapper: {
        display: 'inline-block',
        boxSizing: 'border-box',
        background: `linear-gradient(to right, ${lightPink}, ${cyan})`,
        padding: '5px',
        zIndex: 1,
        borderTopLeftRadius: '15px',
        borderBottomRightRadius: '15px'
    }
}