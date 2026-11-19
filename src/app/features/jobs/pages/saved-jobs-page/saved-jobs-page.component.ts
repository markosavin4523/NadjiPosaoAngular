import { ChangeDetectorRef, Component } from '@angular/core';
import { PaginationHandler } from '../../../../shared/pagination/pagination-handler';
import { IPagedResponse, IPagedSearch } from '../../../../shared/interfaces/i-paged-response';
import { BlJobsRequesnService } from '../../bussines-logic/request/bl-jobs-requesn-service';
import { IJob } from '../../interfaces/i-job';
import { ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-saved-jobs-page',
  standalone: false,
  templateUrl: './saved-jobs-page.component.html',
  styleUrl: './saved-jobs-page.component.scss',
})
export class SavedJobsPageComponent {

  constructor(private service: BlJobsRequesnService, private cdr: ChangeDetectorRef) { }
  pagination = new PaginationHandler<IPagedSearch>();
  apiResponse: IPagedResponse<IJob> | null = null;

  ngAfterViewInit() {
    this.loadJobs();
  }
  onPageChange(event: PageEvent) {
    this.pagination.setPage(event.pageIndex, event.pageSize);
    this.loadJobs();
  }

  loadJobs() {
    const requestData = this.pagination.getRequestParams();
    this.service.getSavedJobs(requestData).subscribe({
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
