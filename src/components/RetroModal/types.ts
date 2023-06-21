import {AddToDoHandlerPropsI} from "../RetroToDo/types.ts";
import {ReactNode} from "react";

export interface RetroModalWrapperI {
    onCancel: () => void;
    onSubmit: ({text}: AddToDoHandlerPropsI) => void;
}

export interface RetroModalI {
    children: ReactNode
}

export interface RetroModalBackdropI {
    onCancel: () => void;
}

export interface RetroModalInfoSectionI {
    id: string;
    text: string;
}