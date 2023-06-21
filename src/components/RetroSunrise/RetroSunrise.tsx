import {FC, useContext} from "react";
import {createUseStyles} from "react-jss";
import AnimationDelayContext from "../AnimationDelayContext/AnimationDelayContext.tsx";

import {RetroSunriseI} from "./types.ts";
import styles from "./styles.ts";

const useStyles = createUseStyles({...styles})

const RetroSunrise: FC<RetroSunriseI> = ({sunDiameterAsWindowPercentage = 50}) => {
    const {horizonAnimationDelayInSecs} = useContext(AnimationDelayContext);

    const classes = useStyles({sunDiameterAsWindowPercentage, animationDelayInSecs: horizonAnimationDelayInSecs});

    const id = 'retroSunrise';

    return <div id={id} data-testid={id} className={classes.sunrise}></div>
};

export default RetroSunrise