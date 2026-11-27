import { ChangeDetectorRef, Component } from '@angular/core';
import { BlUsersActivityTableService } from '../../users/business-logic/tables/bl-users-activity-table-service';
import { BlUsersRequestSrervice } from '../../users/business-logic/request/bl-users-request-srervice';
import { MatTableDataSource } from '@angular/material/table';
import { PaginationHandler } from '../../../../shared/pagination/pagination-handler';
import { IUserActivity } from '../../users/interfaces/i-user-activity';
import { FormControl, FormGroup } from '@angular/forms';
import { IUserActivitySearch } from '../../users/interfaces/i-user-activity-search';
import { IPagedResponse } from '../../../../shared/interfaces/i-paged-response';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-activity-page',
  standalone: false,
  templateUrl: './user-activity-page.component.html',
  styleUrl: './user-activity-page.component.scss',
})
export class UserActivityPageComponent {

  constructor(
     public tableService : BlUsersActivityTableService,
     private reqService : BlUsersRequestSrervice,
     private cdr : ChangeDetectorRef

  ){}

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  pagination = new PaginationHandler<IUserActivitySearch>();
  response : IPagedResponse<IUserActivity> | null = null;
  isLoading = true;

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
    this.reqService.getUsersActivity(data).subscribe({
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
}
