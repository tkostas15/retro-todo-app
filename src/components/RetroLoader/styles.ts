import {lightPink, pink} from '../../common/commonColors.ts'
import {cubicBezierAnimation} from "../../common/commonStyles.ts";

import {RetroLoaderI} from "./types.ts";

export default {
    wrapper: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background: 'transparent'
    },

    '@keyframes load': {
        '0%': {opacity: '0', width: '0'},
        '50%': {opacity: '1'},
        '100%': {opacity: '1', width: '100%'}
    },
    loader: ({durationInSecs = 3}: RetroLoaderI) => ({
        display: 'inline-block',
        width: '15px',
        height: '5px',
        position: 'absolute',
        left: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        background: `linear-gradient(to right, ${pink}, ${lightPink})`,
        opacity: '0',
        animation: `${durationInSecs}s forwards $load`,
        animationTimingFunction: cubicBezierAnimation,
        "&:after": {
            content: '""',
            width: '10px',
            height: '9px',
            position: 'absolute',
            top: '-2px',
            right: '0',
            borderRadius: '50%',
            background: `${lightPink}`,
            boxShadow: `0px 0px 15px 10px ${lightPink}`,
        }
    }),


    inner: {}
}