export interface AnimationDelayI {
    animationDelayInSecs?: number
}

export interface RetroGridI extends AnimationDelayI {
    horizontalLinesQuantity: number;
    verticalLinesQuantity: number;
}

export interface RetroGridHorizontalLinesI extends AnimationDelayI {
    horizontalLinesQuantity: number;
}

export interface RetroGridVerticalLinesI extends AnimationDelayI {
    verticalLinesQuantity: number;
}