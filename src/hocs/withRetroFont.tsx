import {FC} from "react";
import {createUseStyles} from "react-jss";

import {WithRetroFontI} from "./types.ts"
import styles from "./styles.ts";

const getStyles = createUseStyles({...styles});

const withRetroFont: FC<WithRetroFontI> = ({text}) => {
    const classes = getStyles();

    return <span className={classes.retroFont}>{text}</span>
}

export default withRetroFont;