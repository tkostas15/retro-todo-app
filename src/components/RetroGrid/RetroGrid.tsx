import {FC, useContext} from "react";
import {createUseStyles} from "react-jss";

import RetroGridHorizontalLines from "./RetroGridHorizontalLines.tsx";
import RetroGridVerticalLines from "./RetroGridVerticalLines.tsx";
import {RetroGridI} from "./types.ts"
import styles from "./styles.ts";
import AnimationDelayContext from "../AnimationDelayContext/AnimationDelayContext.tsx";

const useStyles = createUseStyles({...styles})

const RetroGrid: FC<RetroGridI> = ({horizontalLinesQuantity, verticalLinesQuantity}) => {
    const {gridAnimationDelayInSecs} = useContext(AnimationDelayContext)

    const classes = useStyles({animationDelayInSecs: gridAnimationDelayInSecs});

    const id = 'retroGrid';

    return <div id={id} data-testid={id} className={classes.grid}>
        <RetroGridHorizontalLines horizontalLinesQuantity={horizontalLinesQuantity}/>
        <RetroGridVerticalLines verticalLinesQuantity={verticalLinesQuantity}/>
    </div>
};

export default RetroGrid;