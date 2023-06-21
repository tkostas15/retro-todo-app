import {FC, useContext} from "react";
import {createUseStyles} from "react-jss";
import cn from "classnames";

import {RetroGridHorizontalLinesI} from "./types.ts"
import styles from "./styles.ts";
import AnimationDelayContext from "../AnimationDelayContext/AnimationDelayContext.tsx";

const useStyles = createUseStyles({...styles})

const RetroGridHorizontalLines: FC<RetroGridHorizontalLinesI> = ({horizontalLinesQuantity}) => {
    const {gridAnimationDelayInSecs} = useContext(AnimationDelayContext)

    const classes = useStyles({});

    const id = 'retroHorizontalLines';

    const horizontalLines = [...Array(horizontalLinesQuantity).keys()];

    return <div id={id} data-testid={id} className={cn(classes.gridLines, classes.gridHorizontalLines)}>
        {horizontalLines.map((key) => {
            const keyIsZero: boolean   = key === 0;
            const initialDelay: number = 1 + gridAnimationDelayInSecs;
            const delayInSecs: number  = keyIsZero ? initialDelay : (initialDelay + key / 10);

            return <div key={key} className={cn(classes.gridLine, classes.gridHorizontalLine)}
                        style={{animationDelay: `${delayInSecs}s`}}/>
        })}
    </div>
};

export default RetroGridHorizontalLines;