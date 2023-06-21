import {FC} from "react";
import {createUseStyles} from "react-jss";

import styles from "./styles.ts"
import {RetroLoaderI} from "./types.ts";

const useStyles = createUseStyles({...styles});

const RetroLoader: FC<RetroLoaderI> = ({durationInSecs = 3}) => {
    const classes = useStyles({durationInSecs});

    const id = 'retroLoader';

    return <div id={id} data-tesid={id} className={classes.wrapper}>
        <div id='loader' className={classes.loader}/>
    </div>
}

export default RetroLoader;