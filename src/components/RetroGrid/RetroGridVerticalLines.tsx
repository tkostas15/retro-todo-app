import {FC, useContext} from "react";
import {createUseStyles} from "react-jss";
import cn from "classnames";

import {RetroGridVerticalLinesI} from "./types.ts"
import styles from "./styles.ts";
import AnimationDelayContext from "../AnimationDelayContext/AnimationDelayContext.tsx";

const useStyles = createUseStyles({...styles})

const RetroGridVerticalLines: FC<RetroGridVerticalLinesI> = ({verticalLinesQuantity}) => {
    const {gridAnimationDelayInSecs} = useContext(AnimationDelayContext)

    const classes = useStyles({animationDelayInSecs: gridAnimationDelayInSecs});

    const id = 'retroVerticalLines';

    const verticalLinesQuantityIsEvenNumber = verticalLinesQuantity % 2 === 0;

    const verticalLinesQuantityToUse = verticalLinesQuantityIsEvenNumber ? (verticalLinesQuantity + 1) : verticalLinesQuantity;

    const verticalLines: number[] = [...Array(verticalLinesQuantityToUse).keys()];

    return <div id={id} data-testid={id} className={cn(classes.gridLines, classes.gridVerticalLines)}>
        {
            verticalLines.map((key) => {
                const maxRotationDegree = 80;

                const middleLineKey: number   = Math.floor(verticalLines.length / 2);
                const isBeforeMiddle: boolean = key < middleLineKey;
                const isAfterMiddle: boolean  = key > middleLineKey;

                const linesPerSide        = middleLineKey;
                const degreesToRotateStep = Math.round(maxRotationDegree / linesPerSide);

                const positiveDegree: number = maxRotationDegree - (key * degreesToRotateStep);
                const negativeDegree: number = -(maxRotationDegree - ((middleLineKey - (key - middleLineKey)) * degreesToRotateStep));

                const degreesToRotate: number = isBeforeMiddle ? positiveDegree :
                                                isAfterMiddle ? negativeDegree :
                                                0;

                return <div key={key} className={cn(classes.gridLine, classes.gridVerticalLine)}
                            style={{
                                transform: `rotate(${degreesToRotate}deg)`,
                                transformOrigin: 'top'
                            }}/>
            })
        }
    </div>
};

export default RetroGridVerticalLines;