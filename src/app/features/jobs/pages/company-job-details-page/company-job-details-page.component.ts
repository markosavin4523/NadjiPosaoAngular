import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BlJobsRequesnService } from '../../bussines-logic/request/bl-jobs-requesn-service';
import { MatDialog } from '@angular/material/dialog';
import { IJobDetails } from '../../interfaces/i-job';
import { CandidatesListComponent } from '../../../applications/components/candidates-list/candidates-list.component';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-company-job-details-page',
  standalone: false,
  templateUrl: './company-job-details-page.component.html',
  styleUrl: './company-job-details-page.component.scss',
})
export class CompanyJobDetailsPageComponent {

  id : number;
  job: IJobDetails | null = null;
  
  constructor(
    private route : ActivatedRoute,
    private jobService : BlJobsRequesnService,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog
  ) 
  {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
  }

  ngOnInit()
  {
    this.loadData();
  }

  closeJob() : void
  {
    const confirmRef = this.dialog.open(ConfirmDialogComponent, {
      width : "400px",
      data: {
        question: "Are you sure you want to close the position?",
        confirmText : "yes",
        closeText : "no"

      }
    });

    confirmRef.afterClosed().subscribe((confirmed : boolean) => {
      if (!confirmed) return;
      this.jobService.close(this.id).subscribe({
      next : (response) => {
        this.loadData();
      },
      error : (err) => {
          console.log(err)
      }
    })
    })
    
  }

  openDialog() : void
  {
    const dialogRef = this.dialog.open(CandidatesListComponent, {
          width : '800px',
          data : {
            id: this.id,
            job : this.job

          }
        });
  }

  
  loadData()
  {
    this.jobService.getOnJobCompany(this.id).subscribe({
      next: (response)=>{
        this.job = response;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err)
      }
    })
  }



}
