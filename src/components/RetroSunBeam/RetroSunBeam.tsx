import {FC} from "react";
import {createUseStyles} from "react-jss";

import {RetroSunBeamI} from "./types.ts";
import styles from "./styles.ts";

const useStyles = createUseStyles({...styles})
const RetroSunBeam: FC<RetroSunBeamI> = ({sizeInPixels = 5}) => {
    const classes = useStyles({sizeInPixels});

    const id = `retroSunBeam-${sizeInPixels}-px`;

    return <div id={id} data-testid={id} className={classes.beam}></div>
};

export default RetroSunBeam;