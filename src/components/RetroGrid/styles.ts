import {lightPink} from "../../common/commonColors.ts";
import {cubicBezierAnimation} from "../../common/commonStyles.ts"
import {AnimationDelayI} from "./types.ts"

export default {
    grid: {
        position: 'absolute',
        top: '50vh',
        left: '0',
        width: '100%',
        height: '50vh',
        overflow: 'hidden'
    },
    gridLines: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        display: "flex",
        gap: '0'
    },
    gridHorizontalLines: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        zIndex: '1'
    },
    gridVerticalLines: {
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        zIndex: '2',
        top: '-1px'
    },
    gridLine: {
        content: '""',
        display: 'inline-block',
        backgroundColor: `${lightPink}`,
        opacity: '0',
    },
    '@keyframes horizontalLineLoad': {
        '0%': {opacity: '0', width: '0'},
        '100%': {opacity: '.4', width: '100%'}
    },
    '@keyframes verticalLineLoad': {
        '0%': {opacity: '0', height: '0'},
        '100%': {opacity: '.4', height: '200%'}
    },
    gridHorizontalLine: {
        width: "0",
        height: '.2rem',
        animation: '2s $horizontalLineLoad forwards',
        animationTimingFunction: cubicBezierAnimation,
    },
    gridVerticalLine: ({animationDelayInSecs = 0}: AnimationDelayI) => ({
        width: '.2rem',
        height: '0',
        animation: '2s $verticalLineLoad forwards',
        animationDelay: `${animationDelayInSecs}s`,
        animationTimingFunction: cubicBezierAnimation,
    })
}