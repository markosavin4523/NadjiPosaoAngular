import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IJob } from '../../interfaces/i-job';
import { IPagedResponse } from '../../../../shared/interfaces/i-paged-response';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-jobs-list',
  standalone: false,
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.scss',
})
export class JobsListComponent {
  @Output() pageChanged = new EventEmitter<PageEvent>();

  @Input()response: IPagedResponse<IJob> | null = null;

  onPageChange(event : PageEvent)
  {
    this.pageChanged.emit(event);
  }
}
