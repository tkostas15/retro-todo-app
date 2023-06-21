import {FC, useContext} from "react";
import {createUseStyles} from "react-jss";
import AnimationDelayContext from "../AnimationDelayContext/AnimationDelayContext.tsx";

import {RetroStartI} from "./types.ts"
import styles from "./styles.ts";

const useStyles = createUseStyles({...styles})

const RetroStar: FC<RetroStartI> = ({sizeInPixels = 5, posX, posY}) => {
    const {horizonAnimationDelayInSecs} = useContext(AnimationDelayContext);

    const classes = useStyles({sizeInPixels, posX, posY, animationDelayInSecs: horizonAnimationDelayInSecs})

    return <div className={classes.star}/>
};

export default RetroStar