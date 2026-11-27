import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { BlApplicationRequestService } from '../../business-logic/requests/bl-application-request.service';
import { PaginationHandler } from '../../../../shared/pagination/pagination-handler';
import { IPagedResponse, IPagedSearch } from '../../../../shared/interfaces/i-paged-response';
import { IApplication } from '../../interfaces/i-application';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-my-applications-page',
  standalone: false,
  templateUrl: './my-applications-page.component.html',
  styleUrl: './my-applications-page.component.scss',
})
export class MyApplicationsPageComponent {
  constructor(
    private service: BlApplicationRequestService,
    private cdr: ChangeDetectorRef
  ) { }

  pagination = new PaginationHandler<IPagedSearch>();
  response: IPagedResponse<IApplication> | null = null;

  ngOnInit() {
    this.loadData();
  }


  loadData() {
    const data = this.pagination.getRequestParams();
    this.service.getMyApplication(data).subscribe({
      next: (response) => {
        this.response = response;
        this.cdr.detectChanges();

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  onPageChange(event: PageEvent) {
    this.pagination.setPage(event.pageIndex, event.pageSize);
    this.loadData();
  }

  getStatusClass(status: string): string {
    switch (status?.toLowerCase()) {
      case 'prihvacen':
        return 'status-accepted';
      case 'odbijen':
        return 'status-rejected';
      case 'u obradi':
      default:
        return 'status-pending';
    }
  }

}
