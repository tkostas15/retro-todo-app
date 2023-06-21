import {cyan, lightPink, purple, white} from "../../common/commonColors.ts";
import {cubicBezierAnimation} from "../../common/commonStyles.ts";

const borderGradient    = `linear-gradient(to right, ${lightPink}, ${cyan})`;
const boxShadowGradient = `conic-gradient(from 60deg, ${lightPink}, ${cyan})`;

const styles = {
    '@keyframes rise': {
        from: {opacity: '0', transform: 'translateY(-20px)'},
        to: {opacity: '1', transform: 'translateY(0)'},
    },
    buttonWrapper: ({animationDelayInSecs = 0, disableAnimations = false}) => ({
        position: 'relative',
        background: borderGradient,
        border: 'none',
        outline: 'none',
        display: 'inline-flex',
        borderTopLeftRadius: '15px',
        borderBottomRightRadius: '15px',
        transition: `.3s box-shadow ${cubicBezierAnimation}`,
        opacity: `${disableAnimations ? '1' : '0'}`,
        transform: `${disableAnimations ? 'none' : 'translateY(-20px)'}`,
        animation: `${disableAnimations ? 'none' : '2s $rise forwards'}`,
        animationDelay: `${disableAnimations ? 0 : (2 + animationDelayInSecs)}s`,
        '&:hover': {
            '&::after': {
                content: '""',
                position: 'absolute',
                inset: '-1px',
                zIndex: -1,
                background: boxShadowGradient,
                filter: 'blur(50px)',
            }
        }
    }),
    button: {
        borderTopLeftRadius: '15px',
        borderBottomRightRadius: '15px',
        padding: '10px 20px',
        border: 'none',
        textTransform: 'uppercase',
        outline: 'none',
        background: purple,
        display: 'inline-block',
        color: white,
        fontWeight: 200,
        fontSize: '2rem',
        fontFamily: 'retro',
        margin: '3px',
        '&:hover': {
            cursor: 'pointer',
        },
        '@media (max-width: 1200px)': {
            padding: '5px 10px',
            fontSize: '1.3rem'
        }
    }
}

export default styles