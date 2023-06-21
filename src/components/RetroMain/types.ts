import {ReactElement} from "react";

export interface AnimationDelayContextI {
    horizonAnimationDelayInSecs: number,
    gridAnimationDelayInSecs: number,
}

export interface AnimationDelayContextProviderI {
    children: ReactElement
}