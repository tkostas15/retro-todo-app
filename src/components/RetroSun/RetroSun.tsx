import {FC, useContext} from "react";
import {createUseStyles} from "react-jss";
import AnimationDelayContext from "../AnimationDelayContext/AnimationDelayContext.tsx";

import RetroSunBeam from "../RetroSunBeam/RetroSunBeam.tsx";
import {RetroSunI} from "./types.ts";
import styles from "./styles.ts";

const useStyles = createUseStyles({...styles});

const RetroSun: FC<RetroSunI> = ({diameterInWindowPercent = 50}) => {
    const {horizonAnimationDelayInSecs} = useContext(AnimationDelayContext);

    const classes = useStyles({diameterInWindowPercent, animationDelayInSecs: horizonAnimationDelayInSecs});

    const id = 'retroSun'

    const sunBeams = [
        {id: 1, sizeInPixels: 5}, {id: 2, sizeInPixels: 10}, {id: 3, sizeInPixels: 15}
    ]

    return <div id={id} data-tesid={id} className={classes.sun}>
        <div className={classes.sunBeams}>
            {sunBeams.map((sunBeam => {
                return <RetroSunBeam key={sunBeam.id} sizeInPixels={sunBeam.sizeInPixels}/>
            }))}
        </div>
    </div>
};


export default RetroSun;