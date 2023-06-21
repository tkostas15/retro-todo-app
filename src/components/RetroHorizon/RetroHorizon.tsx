import {FC} from "react";
import {createUseStyles} from "react-jss";

import RetroSun from "../RetroSun/RetroSun.tsx";
import RetroSunrise from "../RetroSunrise/RetroSunrise.tsx";
import RetroStar from "../RetroStar/RetroStar.tsx";
import getRandomStarsArray from "./helpers/getRandomStarsArray.ts";
import styles from "./styles.ts";

const useStyles = createUseStyles({...styles})

const RetroHorizon: FC = () => {
    const classes = useStyles();

    const id      = 'retroHorizon';
    const starsId = 'retroStars';

    const sunDiameterAsWindowPercentage = 40;

    const stars = getRandomStarsArray();

    return <div id={id} data-testid={id} className={classes.retroHorizon}>
        <RetroSun diameterInWindowPercent={sunDiameterAsWindowPercentage}/>
        <RetroSunrise sunDiameterAsWindowPercentage={sunDiameterAsWindowPercentage}/>

        <div id={starsId} data-tesid={starsId} className={classes.stars}>
            {stars.map(star => <RetroStar key={star.key} sizeInPixels={star.sizeInPixels}
                                          posX={star.posX} posY={star.posY}/>)}
        </div>
    </div>
};

export default RetroHorizon;