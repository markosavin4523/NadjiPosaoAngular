import { Injectable } from '@angular/core';
import { IColumn } from '../../interfaces/i-column';

@Injectable({
  providedIn: 'root',
})
export class BlUsersActivityTableService {

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
      index: "actorId",
      title: "User ID"
    },
    {
      index: "useCaseName",
      title: "Usecase name"
    },
    {
      index: "useCaseData",
      title: "Usecase data",
    },
    {
      index: "createdAt",
      title: "Date"
    },
  ];
  displayedColumns: string[] = this.columns.map(x => x.index);
}
