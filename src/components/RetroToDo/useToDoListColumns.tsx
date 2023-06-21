import {RetroToDoInstanceT, UseToDoColumnsPropsI} from "./types.ts";
import RetroButton from "../RetroButton/RetroButton.tsx";
import {ColumnDef, createColumnHelper} from "@tanstack/react-table";

const useToDoListColumns = ({onDelete}: UseToDoColumnsPropsI) => {
    const columnHelper = createColumnHelper<RetroToDoInstanceT>();

    const dateOptions: { [key: string]: string } = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

    const columns: ColumnDef<RetroToDoInstanceT, any>[] = [
        columnHelper.accessor((row: RetroToDoInstanceT) => row.id, {
            id: 'Delete',
            cell: (info) => <RetroButton id={`delete-todo-${info.getValue().toString()}`} text='Delete'
                                         onClick={() => onDelete({id: info.getValue()})}
                                         style={{fontSize: '.8rem', padding: '7px'}} disableAnimations/>,
            header: () => <span>Action</span>,
            size: 130
        }),
        columnHelper.accessor((row: RetroToDoInstanceT) => row.id, {
            id: 'Id',
            cell: (info) => <>{(info.getValue() as number).toString()}</>,
            header: () => <span>Id</span>,
            size: 60
        }),
        columnHelper.accessor((row: RetroToDoInstanceT) => row.date, {
            id: 'date',
            cell: (info) => <>{(info.getValue() as Date).toLocaleDateString('en-US', dateOptions)}</>,
            header: () => <span>Date published</span>,
            size: 250
        }),
        columnHelper.accessor((row: RetroToDoInstanceT) => row.text, {
            id: 'text',
            cell: (info) => <>{(info.getValue() as string)}</>,
            header: () => <span>Todo</span>,
            size: 350
        }),
    ]

    return columns
};

export default useToDoListColumns;