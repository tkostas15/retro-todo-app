import {FC} from "react";

import AnimationDelayContext from "./AnimationDelayContext.tsx";
import {AnimationDelayContextProviderI} from "../RetroMain/types.ts";

const AnimationDelayContextProvider: FC<AnimationDelayContextProviderI> = ({children}) => {
    return <AnimationDelayContext.Provider value={{
        horizonAnimationDelayInSecs: 0,
        gridAnimationDelayInSecs: 2
    }}>
        {children}
    </AnimationDelayContext.Provider>
};

export default AnimationDelayContextProvider;