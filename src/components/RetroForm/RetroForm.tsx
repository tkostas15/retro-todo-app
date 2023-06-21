import {FC} from "react";
import {createUseStyles} from "react-jss";
import {Form, Formik} from "formik";

import RetroInput from "../RetroInput/RetroInput.tsx";
import {RetroFormI, RetroFormValuesI} from "./types.ts"
import styles from "./styles.ts";
import RetroButton from "../RetroButton/RetroButton.tsx";

const useStyles = createUseStyles({...styles});

const RetroForm: FC<RetroFormI> = ({onSubmit, onCancel}) => {
    const formId                          = 'retroForm';
    const formButtonsId                   = 'retroFormButtons';
    const classes                         = useStyles();
    const initialValues: RetroFormValuesI = {todo: ''};

    const formSubmitHandler = (
        values: RetroFormValuesI,
    ) => {
        const hasValues = !!values.todo;

        if (hasValues) {
            onSubmit({text: values.todo});
            onCancel();
        }
    }

    return <Formik initialValues={initialValues} onSubmit={formSubmitHandler}>
        <Form id={formId} data-testid={formId} className={classes.retroForm}>
            <RetroInput id='todo' placeholder='Please type here what you must do...' type='text' autofocus/>

            <div id={formButtonsId} data-testid={formButtonsId} className={classes.retroFormButtons}>
                <RetroButton id='submit' text='submit' type={'submit'} disableAnimations/>
                <RetroButton id='cancel' text='cancel' onClick={onCancel} disableAnimations/>
            </div>
        </Form>
    </Formik>
};

export default RetroForm;