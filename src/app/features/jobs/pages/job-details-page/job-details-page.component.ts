import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlJobsRequesnService } from '../../bussines-logic/request/bl-jobs-requesn-service';
import { IJobDetails } from '../../interfaces/i-job';
import { MatDialog } from '@angular/material/dialog';
import { JobApplyFormComponent } from '../../../applications/components/job-apply-form/job-apply-form.component';

@Component({
  selector: 'app-job-details-page',
  standalone: false,
  templateUrl: './job-details-page.component.html',
  styleUrl: './job-details-page.component.scss',
})
export class JobDetailsPageComponent implements OnInit {

  id : number;
  job: IJobDetails | null = null;
  isSaved : boolean = false;
  constructor(
    private route : ActivatedRoute,
    private jobService : BlJobsRequesnService,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog
  ) 
  {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
  }

  ngOnInit() {

    this.loadData();

  }

  loadData()
  {
    this.jobService.getOneJob(this.id).subscribe({
      next : (response) =>
      {
        this.job = response;
        this.isSaved = response.isLiked;
        this.cdr.detectChanges();
      },
      error : (err) => {
        console.log(err)
      }
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(JobApplyFormComponent, {
      width : '800px',
      data : {
        id: this.id,
        job : this.job
      }
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   if(result === true) {
    //     this.getAllData();
    //   }
    // });
  }

  onToggleSave()
  {
    this.jobService.toggleSave(this.id, !this.isSaved).subscribe({
      next: (response) => {
        console.log(response);
        this.isSaved = !this.isSaved;
        this.loadData();
        
      },
      error : (err) => {
        console.log(err)
      }
    })
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
