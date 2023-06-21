import {lightPurple} from "../../common/commonColors.ts"
import {cubicBezierAnimation} from "../../common/commonStyles.ts";

export default {
    '@keyframes starRise': {
        from: {opacity: 0},
        to: {opacity: 1},
    },
    star: ({sizeInPixels = 5, posX = 0, posY = 0, animationDelayInSecs = 0}) => {
        return {
            position: 'absolute',
            backgroundColor: `${lightPurple}`,
            boxShadow: `0px 0px 6px 2px ${lightPurple}`,
            width: `${sizeInPixels}px`,
            height: `${sizeInPixels}px`,
            top: `${posY}px`,
            left: `${posX}px`,
            borderRadius: '50%',
            opacity: '0',
            animation: '2s $starRise forwards',
            animationDelay: `${animationDelayInSecs}s`,
            animationTimingFunction: cubicBezierAnimation
        }
    }
}