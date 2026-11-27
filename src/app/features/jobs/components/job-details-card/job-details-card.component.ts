import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IJobDetails } from '../../interfaces/i-job';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-job-details-card',
  standalone: false,
  templateUrl: './job-details-card.component.html',
  styleUrl: './job-details-card.component.scss',
})
export class JobDetailsCardComponent {
  @Input() job : IJobDetails | null =null;

  @Input() isUserRole : boolean = true;

  @Output() openDialog = new EventEmitter<number>();

  @Output() toggleSave = new EventEmitter<number>();

  @Output() closeJob = new EventEmitter<number>();

  onOpenDialog() : void
  {
    this.openDialog.emit(this.job?.id);
  }

  onToggleSave() : void
  {
    this.toggleSave.emit(this.job?.id);
  }

  onCloseJob()
  {
    this.closeJob.emit(this.job?.id);
  }


  formatSalary(job: IJobDetails): string {
    if (job.salaryFrom != null && job.salaryTo != null) {
      return `${job.salaryFrom} - ${job.salaryTo} EUR`;
    }
    if (job.salaryFrom != null) {
      return `Od ${job.salaryFrom} EUR`;
    }
    if (job.salaryTo != null) {
      return `Do ${job.salaryTo} EUR`;
    }
    return 'Po dogovoru';
  }

}
