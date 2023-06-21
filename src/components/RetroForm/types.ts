import {AddToDoHandlerPropsI} from "../RetroToDo/types.ts";

export interface RetroFormI {
    onSubmit: ({text}: AddToDoHandlerPropsI) => void
    onCancel: () => void;
}

export interface RetroFormButtonsI {
    onSubmit?: () => void;
    onCancel: () => void;
}

export interface RetroFormValuesI {
    todo: string;
}