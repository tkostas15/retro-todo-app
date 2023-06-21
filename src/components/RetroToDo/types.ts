export type RetroToDoInstanceT = {
    id: number;
    date: Date;
    text: string;
}

export type RetroToDoListT = Array<RetroToDoInstanceT>

export interface AddToDoHandlerPropsI {
    text: string;
}

export interface RemoveToDoHandlerPropsI {
    id: number
}

type RemoveToDoHandler = ({id}: RemoveToDoHandlerPropsI) => void;

export interface RetroToDoListI {
    values: Array<RetroToDoInstanceT>
    onDelete: RemoveToDoHandler;
}

export interface UseToDoColumnsPropsI {
    onDelete: RemoveToDoHandler;
}