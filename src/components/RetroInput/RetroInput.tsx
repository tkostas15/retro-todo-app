import {FC} from "react";
import {createUseStyles} from "react-jss";
import {Field} from "formik";

import {RetroInputI} from "./types.ts"
import styles from "./styles.ts";

const useStyles = createUseStyles({...styles})

const RetroInput: FC<RetroInputI> = ({id, placeholder, type, autofocus = false}) => {
    const classes = useStyles();

    return (
        <>
            <label htmlFor={id} className={classes.retroInputLabel}>{id}</label>
            <Field id={id} name={id} placeholder={placeholder} type={type} autoFocus={autofocus}
                   className={classes.retroInput}/>
        </>
    )
};

export default RetroInput;