import {lightPink} from "../../common/commonColors.ts";
import {cubicBezierAnimation} from "../../common/commonStyles.ts";

const linearGradient = `linear-gradient(to bottom, transparent, ${lightPink})`;
export default {
    '@keyframes rise': {
        from: {opacity: '0'},
        to: {opacity: '1'},
    },
    sunrise: ({sunDiameterAsWindowPercentage = 50, animationDelayInSecs = 0}) => {
        const windowWidth = window.innerWidth;

        const dimension           = `${(sunDiameterAsWindowPercentage * windowWidth) / 100}px`;
        const oneThirdOfDimension = `${parseInt(dimension) / 3}px`;

        return {
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            height: `${oneThirdOfDimension}`,
            background: `${linearGradient}`,
            zIndex: '2',
            opacity: '0',
            animation: `2s $rise forwards ${2 + animationDelayInSecs}s`,
            animationTimingFunction: cubicBezierAnimation
        }
    }
}