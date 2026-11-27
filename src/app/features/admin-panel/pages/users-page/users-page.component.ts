import { ChangeDetectorRef, Component } from '@angular/core';
import { BlUsersTableService } from '../../users/business-logic/tables/bl-users-table-service';
import { BlUsersRequestSrervice } from '../../users/business-logic/request/bl-users-request-srervice';
import { MatTableDataSource } from '@angular/material/table';
import { PaginationHandler } from '../../../../shared/pagination/pagination-handler';
import { IUserActivitySearch } from '../../users/interfaces/i-user-activity-search';
import { IPagedResponse } from '../../../../shared/interfaces/i-paged-response';
import { IUser } from '../../users/interfaces/i-user';
import { FormControl, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { ColumnType } from '../../../../shared/enums/column-type';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-users-page',
  standalone: false,
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
})
export class UsersPageComponent {

  constructor (
    public tableService : BlUsersTableService,
    private cdr : ChangeDetectorRef,
    private reqService : BlUsersRequestSrervice,
    private diallogRef : MatDialog
  ){}

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  pagination = new PaginationHandler<IUserActivitySearch>();
  response : IPagedResponse<IUser> | null = null;
  isLoading = true;
  columnTypeEnum = ColumnType;


  form : any = new FormGroup({
    username : new FormControl("")
  })

  onSearch() {
    const rawUsername = this.form.get('username')?.value?.trim() ?? '';
    const filter: Partial<IUserActivitySearch> = rawUsername
    ? { username: rawUsername }
    : { username: null };
    this.pagination.setFilter(filter as IUserActivitySearch);
    this.getData();
  }

  ngAfterViewInit() {

    this.getData();

  }
  onPageChange(event: PageEvent) {
    this.pagination.setPage(event.pageIndex, event.pageSize);
    this.getData();
  }

  getData()
  {
    this.isLoading = true;
    const data = this.pagination.getRequestParams();
    this.reqService.getAllUsers(data).subscribe({
      next : (response) => {
        this.dataSource.data = response.items;
        this.response = response;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) =>{
        this.isLoading = false;
        this.cdr.detectChanges();
        console.log(err);
      }
    })
  }
  ban(user : IUser)
  {
    console.log('kliknuti element:', user);
    const dialogRef = this.diallogRef.open(ConfirmDialogComponent, {
      width : "400px",
      data : {
        question : user.isDeleted ? "Are you sure you want to activate this user?" : "Are you sure you want to ban this user?",
        confirmText: "yes",
        closeText : "no"
      }
    });
    dialogRef.afterClosed().subscribe((confirm) => {
      if (!confirm) return;
      this.reqService.banUser(user.id).subscribe({
        next: (res) => {
          this.getData();
          this.cdr.detectChanges();
        },
        error : (err) => {

        }
      })
    })

  }
}
