import {useEffect, useState} from "react";
import {createUseStyles}     from "react-jss";

import RetroLoader   from "./components/RetroLoader/RetroLoader.tsx";
import RetroMain     from "./components/RetroMain/RetroMain.tsx";
import defaultStyles from "./defaultStyles.ts"

const useStyles = createUseStyles({...defaultStyles})

function App() {
    const [showLoader, setShowLoader] = useState<boolean>(true);

    useStyles();

    useEffect(() => {
        setTimeout(() => setShowLoader(false), 3000)
    }, []);

    return (
        <>
            {showLoader && <RetroLoader/>}
            {!showLoader && <RetroMain/>}
        </>
    )
}

export default App
