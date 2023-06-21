import {RetroToDoInstanceT} from "../RetroToDo/types.ts";
import {ColumnDef} from "@tanstack/react-table";

export interface RetroTableI {
    data: RetroToDoInstanceT[],
    columns: ColumnDef<RetroToDoInstanceT, any>[]
}

export interface RetroTableNoDataI {
    text: string
}