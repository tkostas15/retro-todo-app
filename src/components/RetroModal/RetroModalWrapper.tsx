import {FC} from "react";
import {createUseStyles} from "react-jss";

import {RetroModalWrapperI} from "./types.ts";
import styles from "./styles.ts";
import RetroModalInfoSection from "./RetroModalInfoSection.tsx";
import RetroModalBackdrop from "./RetroModalBackdrop.tsx";
import withGradientBorder from "../../hocs/withGradientBorder.tsx";
import RetroModal from "./RetroModal.tsx";
import RetroForm from "../RetroForm/RetroForm.tsx";

const useStyles = createUseStyles({...styles});

const RetroModalWrapper: FC<RetroModalWrapperI> = ({onCancel, onSubmit}) => {
    const classes = useStyles();

    const modalWrapperId = 'retroModalWrapper';
    const modalInnerId   = 'retroModalInner';

    const RetroModalInfoSectionWithGradientBorder = withGradientBorder(RetroModalInfoSection);
    const RetroModalWithGradientBorder            = withGradientBorder(RetroModal)

    return (
        <div id={modalWrapperId} data-testid={modalWrapperId} className={classes.retroModalWrapper}>
            <RetroModalBackdrop onCancel={onCancel}/>

            <div id={modalInnerId} data-testid={modalInnerId} className={classes.retroModalInner}>
                <RetroModalInfoSectionWithGradientBorder id='press-esc' text='Press ESC to cancel'
                                                         className={classes.retroModalInfoSectionLeft}/>
                <RetroModalWithGradientBorder>
                    <RetroForm onSubmit={onSubmit} onCancel={onCancel}/>
                </RetroModalWithGradientBorder>

                <RetroModalInfoSectionWithGradientBorder id='press-enter' text='Press ENTER to submit'
                                                         className={classes.retroModalInfoSectionRight}/>
            </div>
        </div>
    )
}

export default RetroModalWrapper;