import {white} from "../../common/commonColors.ts";

export default {
    retroInput: {
        display: 'block',
        width: '100%',
        border: 'none',
        outline: 'none',
        padding: '1rem',
        fontFamily: 'retro',
        fontWeight: '400',
        fontSize: '1rem',
        boxSizing: 'border-box',
        '@media (max-width: 1200px)': {
            padding: '.6rem',
            fontSize: '.8rem'
        }
    },
    retroInputLabel: {
        display: 'block',
        textAlign: 'left',
        width: '100%',
        color: white,
        fontFamily: 'retro',
        fontSize: '1rem',
        textTransform: 'uppercase'
    }
}