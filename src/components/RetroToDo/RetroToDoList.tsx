import {FC} from "react";
import {createUseStyles} from "react-jss";

import {RetroToDoInstanceT, RetroToDoListI} from "./types.ts";
import styles from "./styles.ts";
import RetroTable from "../RetroTable/RetroTable.tsx";
import {ColumnDef} from "@tanstack/react-table";
import useToDoListColumns from "./useToDoListColumns.tsx";

const useStyles = createUseStyles({...styles})

const RetroToDoList: FC<RetroToDoListI> = ({values, onDelete}) => {
    const classes = useStyles();

    const id = 'retroToDoList';

    const columns: ColumnDef<RetroToDoInstanceT, any>[] = useToDoListColumns({onDelete});

    return (
        <div id={id} data-testid={id} className={classes.toDoList}>
            <RetroTable data={values} columns={columns}/>
        </div>
    )
};

export default RetroToDoList;