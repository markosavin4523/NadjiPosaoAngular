import { ChangeDetectorRef, Component } from '@angular/core';
import { BlJobsRequesnService } from '../../bussines-logic/request/bl-jobs-requesn-service';
import { IJobsSearch } from '../../interfaces/i-jobs-search';
import { IJob } from '../../interfaces/i-job';
import { IPagedResponse, IPagedSearch } from '../../../../shared/interfaces/i-paged-response';
import { PageEvent } from '@angular/material/paginator';
import { PaginationHandler } from '../../../../shared/pagination/pagination-handler';


@Component({
  selector: 'app-jobs-page',
  standalone: false,
  templateUrl: './jobs-page.component.html',
  styleUrl: './jobs-page.component.scss',
})
export class JobsPageComponent {

  constructor(private service: BlJobsRequesnService,
    private cdr: ChangeDetectorRef,

  ) { }
  currentSearchFilters: Partial<IJobsSearch> = {};

  pagination = new PaginationHandler<IJobsSearch>();

  apiResponse: IPagedResponse<IJob> | null = null;

  onSearch(filter: IJobsSearch) {
    this.pagination.setFilter(filter);
    this.loadJobs();
  }

  ngAfterViewInit() {

    this.loadJobs();

  }
  onPageChange(event: PageEvent) {
    this.pagination.setPage(event.pageIndex, event.pageSize);
    this.loadJobs();
  }

  loadJobs() {
    const requestData = this.pagination.getRequestParams();

    this.service.getAllJobs(requestData).subscribe({
      next: (response) => {
        this.apiResponse = response;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
