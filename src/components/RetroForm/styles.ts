import {darkPurple, purple} from "../../common/commonColors.ts";

export default {
    retroForm: {
        position: 'relative',
        width: '100%',
        background: `linear-gradient(to bottom, ${darkPurple}, ${purple}, ${darkPurple})`,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        zIndex: 3,
        border: 'none',
        borderTopLeftRadius: '15px',
        borderBottomRightRadius: '15px',
        padding: '2rem',
        boxSizing: 'border-box',
        '@media (max-width: 1200px)': {
            padding: '1rem',
        }
    },
    retroFormButtons: {
        display: 'inline-flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        gap: '1rem'
    }
}