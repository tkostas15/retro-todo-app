import {FC} from "react";
import {createUseStyles} from "react-jss";

import styles from "./styles.ts";
import {RetroModalBackdropI} from "./types.ts"

const useStyles = createUseStyles({...styles});

const RetroModalBackdrop: FC<RetroModalBackdropI> = ({onCancel}) => {
    const classes = useStyles();

    const id = 'retroModalBackdrop';

    return <div id={id} data-testid={id} className={classes.retroModalBackdrop} onClick={onCancel}></div>
};

export default RetroModalBackdrop;