import {FC} from "react";
import {createUseStyles} from "react-jss";

import {RetroModalI} from "./types.ts";
import styles from "./styles.ts";

const useStyles = createUseStyles({...styles})

const RetroModal: FC<RetroModalI> = ({children}) => {
    const classes = useStyles();

    const id = 'retroModal';

    return <div id={id} data-testid={id} className={classes.retroModal}>{children}</div>
};

export default RetroModal;