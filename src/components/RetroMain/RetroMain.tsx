import RetroHorizon from "../RetroHorizon/RetroHorizon.tsx";
import RetroGrid from "../RetroGrid/RetroGrid.tsx";
import AnimationDelayContextProvider from "../AnimationDelayContext/AnimationDelayContextProvider.tsx";
import RetroToDo from "../RetroToDo/RetroToDo.tsx";

const RetroMain = () => {
    return <AnimationDelayContextProvider>
        <>
            <RetroHorizon/>
            <RetroGrid horizontalLinesQuantity={15} verticalLinesQuantity={21}/>
            <RetroToDo/>
        </>
    </AnimationDelayContextProvider>
};

export default RetroMain;