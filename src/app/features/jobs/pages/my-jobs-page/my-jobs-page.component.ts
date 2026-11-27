import { ChangeDetectorRef, Component } from '@angular/core';
import { PaginationHandler } from '../../../../shared/pagination/pagination-handler';
import { IPagedResponse, IPagedSearch } from '../../../../shared/interfaces/i-paged-response';
import { IJob } from '../../interfaces/i-job';
import { BlJobsRequesnService } from '../../bussines-logic/request/bl-jobs-requesn-service';
import { PageEvent } from '@angular/material/paginator';
import { delay } from 'rxjs';

@Component({
  selector: 'app-my-jobs-page',
  standalone: false,
  templateUrl: './my-jobs-page.component.html',
  styleUrl: './my-jobs-page.component.scss',
})
export class MyJobsPageComponent {

  pagination = new PaginationHandler<IPagedSearch>();
  apiResponse: IPagedResponse<IJob> | null = null;
  isLoading : boolean = true;

  constructor(
    private service : BlJobsRequesnService,
    private cdr : ChangeDetectorRef
  ){}

  ngAfterViewInit() {
    this.loadJobs();
  }
  onPageChange(event: PageEvent) {
    this.pagination.setPage(event.pageIndex, event.pageSize);
    this.loadJobs();
  }

  loadJobs() {
    this.isLoading = true;
    const requestData = this.pagination.getRequestParams();
    this.service.getMyJobs(requestData).pipe(delay(500)).subscribe({
      next: (response) => {
        this.apiResponse = response;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      }
    })
  }
}
