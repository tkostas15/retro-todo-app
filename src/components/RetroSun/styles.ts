import {lightPink, yellow} from "../../common/commonColors.ts";
import {cubicBezierAnimation} from "../../common/commonStyles.ts";

export default {
    '@keyframes rise': {
        from: {opacity: '0', transform: 'translateY(100%)',},
        to: {opacity: '1', transform: 'translateY(0)',},
    },
    sun: ({diameterInWindowPercent = 50, animationDelayInSecs = 0}) => {
        const windowWidth = window.innerWidth;

        const dimension     = `${(diameterInWindowPercent * windowWidth) / 100}px`;
        const halfDimension = `${parseInt(dimension) / 2}px`;

        return {
            position: 'relative',
            background: `linear-gradient(to bottom, ${yellow}, ${lightPink})`,
            outline: 'none',
            width: `${dimension}`,
            height: `${halfDimension}`,
            borderRadius: `${halfDimension} ${halfDimension} 0 0`,
            border: `none`,
            boxSizing: 'border-box',
            '-webkit-box-sizing': 'border-box',
            '-moz-box-sizing': 'border-box',
            boxShadow: `0px 0px 20px 20px ${lightPink}`,
            zIndex: '3',
            opacity: '0',
            animation: `2s $rise forwards ${animationDelayInSecs}s`,
            animationTimingFunction: cubicBezierAnimation
        }
    },
    sunBeams: ({diameterInWindowPercent = 50}: { diameterInWindowPercent?: number }) => {
        const windowWidth = window.innerWidth;

        const dimension     = `${(diameterInWindowPercent * windowWidth) / 100}px`;
        const halfDimension = `${parseInt(dimension) / 2}px`;

        const paddingTop = `${parseInt(dimension) / 4}px`;

        const flexGap = `${parseInt(dimension) / 18}px`;

        return {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: `${flexGap}`,
            paddingTop: `${paddingTop}`,
            borderRadius: `${halfDimension} ${halfDimension} 0 0`,
        }
    },
}