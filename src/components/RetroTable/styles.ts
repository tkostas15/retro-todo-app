import {cyan, lightPink, purple, white} from "../../common/commonColors.ts";

const gradient = `linear-gradient(to right, ${lightPink}, ${cyan})`;

export default {
    noData: {
        display: 'block',
        width: '100%',
        color: white,
        fontFamily: 'retro',
        fontSize: '1.2rem',
        textAlign: 'center',
        padding: '1.2rem',
        boxSizing: 'border-box',
        whiteSpace: 'pre-line',
        '@media (max-width: 1200px)': {
            padding: '.8rem',
            fontSize: '1rem'
        }
    },
    retroTable: {
        color: white,
        fontFamily: 'retro',
        fontSize: "1.2rem",
        textAlign: 'left',
        borderCollapse: 'collapse',
        width: '100%',
        minWidth: '750px',
        '@media (max-width: 1200px)': {
            fontSize: '1rem'
        }
    },
    retroTableThead: {
        display: 'table-caption',
        borderBottom: '3px solid',
        borderImageSlice: 1,
        borderImageSource: gradient
    },
    retroTableTh: {
        wordBreak: 'break-word',
        padding: '1.2rem',
        background: gradient,
        '-webkit-text-fill-color': 'transparent',
        '-webkit-background-clip': 'text',
        '@media (max-width: 1200px)': {
            padding: '.8rem'
        }
    },
    retroTableTd: {
        verticalAlign: 'text-top',
        wordBreak: 'break-word',
        padding: '1.2rem',
        lineHeight: '1.5',
        background: gradient,
        '-webkit-text-fill-color': 'transparent',
        '-webkit-background-clip': 'text',
        '@media (max-width: 1200px)': {
            padding: '.8rem'
        }
    },
    retroTableBody: {
        '& $retroTableBodyTr:not(:last-child)': {
            borderBottom: `3px solid ${purple}`
        }
    }
}