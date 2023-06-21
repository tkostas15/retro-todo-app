import {black, darkPurple, purple, white} from "../../common/commonColors.ts";

export default {
    '@keyframes modalShow': {
        from: {opacity: 0},
        to: {opacity: 1}
    },
    retroModalWrapper: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: '10',
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 0,
        opacity: 0,
        animation: '.3s $modalShow forwards',
        padding: '2rem',
        boxSizing: 'border-box',
        '@media (max-width: 1200px)': {
            padding: '.5rem'
        },
    },
    retroModalBackdrop: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: black,
        zIndex: 1,
        opacity: .9,
    },
    retroModalInner: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        minWidth: '50%',
        maxWidth: '100%',
        '@media (max-width: 1200px)': {
            minWidth: '80%'
        }
    },
    retroModalInfoSection: {
        position: 'relative',
        background: `linear-gradient(to bottom, ${darkPurple}, ${purple}, ${darkPurple})`,
        padding: '1rem',
        border: 'none',
        borderTopLeftRadius: '15px',
        borderBottomRightRadius: '15px',
        zIndex: 2,
        color: white,
        fontFamily: 'retro',
        '@media (max-width: 1200px)': {
            padding: '.6rem',
            fontSize: '.8rem',
        }
    },
    retroModalInfoSectionLeft: {
        alignSelf: 'flex-start',
        marginLeft: '15px'
    },
    retroModalInfoSectionRight: {
        alignSelf: 'flex-end',
        marginLeft: 0,
        marginRight: '15px'
    },
    retroModal: {
        position: 'relative',
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
        padding: '0',
    }
}