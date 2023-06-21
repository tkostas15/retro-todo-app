import {createContext} from "react";
import {AnimationDelayContextI} from "../RetroMain/types.ts";

const defaultContextState = {
    horizonAnimationDelayInSecs: 0,
    gridAnimationDelayInSecs: 0
}

const AnimationDelayContext = createContext<AnimationDelayContextI>(defaultContextState);

export default AnimationDelayContext;