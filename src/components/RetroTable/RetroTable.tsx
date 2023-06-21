import {flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {FC} from "react";
import {createUseStyles} from "react-jss";

import {RetroTableI} from "./types.ts";
import styles from "./styles.ts";
import RetroTableNoData from "./RetroTableNoData.tsx";

const useStyles = createUseStyles({...styles});

const RetroTable: FC<RetroTableI> = ({data, columns}) => {
    const classes = useStyles();

    const hasData = data && data.length > 0;

    const table = useReactTable({data, columns, getCoreRowModel: getCoreRowModel()});

    if (!hasData) return <RetroTableNoData text="The todo list is empty! let's add something :)"/>;

    return (
        <table className={classes.retroTable}>
            <thead className={classes.retroTableThead}>
            {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => {
                        return <th {...{
                            key: header.id,
                            colSpan: header.colSpan,
                            style: {
                                width: header.getSize(),
                            },
                            className: classes.retroTableTh
                        }}>
                            {header.isPlaceholder
                             ? null
                             : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}
                        </th>
                    })}
                </tr>
            ))}
            </thead>
            <tbody className={classes.retroTableBody}>
            {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                    {row.getVisibleCells().map(cell => (
                        <td {...{
                            key: cell.id,
                            style: {
                                width: cell.column.getSize(),
                            },
                            className: classes.retroTableTd
                        }}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    )
};

export default RetroTable;