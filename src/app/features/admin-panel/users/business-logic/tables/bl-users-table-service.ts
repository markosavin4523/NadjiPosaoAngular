import { Injectable } from '@angular/core';
import { IColumn } from '../../interfaces/i-column';
import { ColumnType } from '../../../../../shared/enums/column-type';

@Injectable({
  providedIn: 'root',
})
export class BlUsersTableService {
  columns : IColumn[] = [
      {
        index: "id",
        title: "Id"
      },
      {
        index: "username",
        title: "Username"
      },
      {
        index: "email",
        title: "Email"
      },
      {
        index: "role",
        title: "Role"
      },
      {
        index : "isDeleted",
        title : "Action",
        columnType : ColumnType.action
      }
    ];
    displayedColumns: string[] = this.columns.map(x => x.index);
}
