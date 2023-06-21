import {FC} from "react";
import {createUseStyles} from "react-jss";

import styles from "./styles.ts";
import {RetroModalInfoSectionI} from "./types.ts"

const useStyles = createUseStyles({...styles});

const RetroModalInfoSection: FC<RetroModalInfoSectionI> = ({id, text}) => {
    const classes = useStyles();

    return (
        <div id={id} data-testid={id} className={classes.retroModalInfoSection}>{text}</div>
    )
};

export default RetroModalInfoSection;