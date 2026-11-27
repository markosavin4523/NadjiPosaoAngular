import { ColumnType } from "../../../../shared/enums/column-type";

export interface IColumn {
    index : string,
    title : string,
    columnType? : ColumnType
}
 