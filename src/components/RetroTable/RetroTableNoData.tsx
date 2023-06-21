import {FC} from "react";
import {createUseStyles} from "react-jss";

import styles from "./styles.ts";
import {RetroTableNoDataI} from "./types.ts";

import withRetroFont from "../../hocs/withRetroFont.tsx";

const useStyles = createUseStyles({...styles});

const RetroTableNoData: FC<RetroTableNoDataI> = ({text}) => {
    const classes = useStyles();

    const noDataId = 'no-data';

    const textWithRetroFont = withRetroFont({text});

    return <div id={noDataId} data-testid={noDataId} className={classes.noData}>{textWithRetroFont}</div>
}

export default RetroTableNoData