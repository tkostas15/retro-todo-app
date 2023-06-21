import {FC} from "react";
import {createUseStyles} from "react-jss";

import {RetroToDoInstanceT} from "./types.ts";
import styles from "./styles.ts";
import withRetroFont from "../../hocs/withRetroFont.tsx";

const useStyles = createUseStyles({...styles})

const RetroToDoRow: FC<RetroToDoInstanceT> = ({id, date, text}) => {
    const classes = useStyles();

    const idToUse = `to-do-row-${id}`;

    const dateOptions: { [key: string]: string } = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

    const idWithRetroFont   = withRetroFont({text: id.toString()});
    const dateWithRetroFont = withRetroFont({text: date.toLocaleDateString("en-US", dateOptions)});
    const textWithRetroFont = withRetroFont({text});

    return <div id={idToUse} data-testid={idToUse} className={classes.toDoRow}>
        <div>{idWithRetroFont}</div>
        <div>{dateWithRetroFont}</div>
        <div>{textWithRetroFont}</div>
    </div>
};

export default RetroToDoRow;