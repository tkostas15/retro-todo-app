import {useCallback, useContext, useEffect, useState} from "react";
import {createUseStyles} from "react-jss";

import {AddToDoHandlerPropsI, RemoveToDoHandlerPropsI, RetroToDoInstanceT, RetroToDoListT} from "./types.ts"
import styles from "./styles.ts";
import RetroButton from "../RetroButton/RetroButton.tsx";
import RetroModalWrapper from "../RetroModal/RetroModalWrapper.tsx";
import RetroToDoList from "./RetroToDoList.tsx";
import withGradientBorder from "../../hocs/withGradientBorder.tsx";
import AnimationDelayContext from "../AnimationDelayContext/AnimationDelayContext.tsx";

const useStyles = createUseStyles({...styles});

const RetroToDo = () => {
    const [toDoList, setToDoList]   = useState<RetroToDoListT>([]);
    const [showModal, setShowModal] = useState<boolean>(false);

    const {gridAnimationDelayInSecs} = useContext(AnimationDelayContext);

    const classes = useStyles({animationDelayInSecs: gridAnimationDelayInSecs});

    const id = 'retroToDoListWrapper';

    const addToDoHandler      = ({text}: AddToDoHandlerPropsI) => {
        const currentDate: Date     = new Date();
        const newInstanceId: number = toDoList.length + 1;

        const toDoInstanceToAdd = {id: newInstanceId, date: currentDate, text};

        setToDoList((oldToDoListState) => [...oldToDoListState, toDoInstanceToAdd]);
    };
    const deleteToDoHandler   = ({id}: RemoveToDoHandlerPropsI) => {
        const newToDoList: RetroToDoListT = toDoList
            .filter((toDo: RetroToDoInstanceT) => toDo.id !== id)
            .map((toDo: RetroToDoInstanceT) => {
                const toDoIdIsBiggerThanTheOneDeleted = toDo.id > id;

                if (toDoIdIsBiggerThanTheOneDeleted) toDo.id--;

                return toDo;
            });
        setToDoList(newToDoList);
    }
    const escapeButtonHandler = useCallback((e: KeyboardEvent) => {
        const buttonPressedIsEsc = e.key === 'Escape';
        const shouldCloseModal   = buttonPressedIsEsc && showModal;

        if (shouldCloseModal) setShowModal(false);
    }, [showModal]);

    const showModalHandler   = () => setShowModal(true);
    const cancelModalHandler = () => setShowModal(false);

    useEffect(() => {
        document.addEventListener('keydown', escapeButtonHandler, false);

        return () => document.removeEventListener('keydown', escapeButtonHandler, false);
    }, [escapeButtonHandler]);

    const RetroToDoListWithGradientBorder = withGradientBorder(RetroToDoList);

    return (
        <>
            <div id={id} data-testid={id} className={classes.toDo}>
                <RetroButton id='add-to-do' text='Add ToDo' onClick={showModalHandler}/>
                <RetroToDoListWithGradientBorder values={toDoList} onDelete={deleteToDoHandler}
                                                 className={classes.toDoListWrapper}/>
            </div>
            {showModal && <RetroModalWrapper onCancel={cancelModalHandler} onSubmit={addToDoHandler}/>}
        </>
    )
};

export default RetroToDo;