import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { JobApplyFormComponent } from '../job-apply-form/job-apply-form.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BlJobsRequesnService } from '../../../jobs/bussines-logic/request/bl-jobs-requesn-service';
import { IPagedResponse, IPagedSearch } from '../../../../shared/interfaces/i-paged-response';
import { ICandidate } from '../../interfaces/i-candidate';
import { PaginationHandler } from '../../../../shared/pagination/pagination-handler';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { BlApplicationRequestService } from '../../business-logic/requests/bl-application-request.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-candidates-list',
  standalone: false,
  templateUrl: './candidates-list.component.html',
  styleUrl: './candidates-list.component.scss',
})
export class CandidatesListComponent {

  constructor(
    private dialogRef: MatDialogRef<JobApplyFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number; job?: any },
    private service: BlJobsRequesnService,
    private appService: BlApplicationRequestService,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog,
  ) { }

  pagination = new PaginationHandler<IPagedSearch>();

  id: number | null = null;
  isLoading: boolean = true;
  isLoadingSubmit: boolean = false;


  candidates: IPagedResponse<ICandidate> = {
    pagesCount: 1,
    perPage: 6,
    items: [],
    currentPage: 1,
    totalCount: 0
  };

  loadCandidates() {
    this.isLoading = true;
    const requestData = this.pagination.getRequestParams();
    this.service.getCandidates(this.data.id, requestData).subscribe({
      next: (response) => {
        this.candidates = response;
        console.log(this.candidates);
        this.isLoading = false;
        this.cdr.detectChanges();

      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      }
    })
  }

  ngOnInit() {
    this.id = this.data?.id ?? null;
    this.loadCandidates()
  }

  close(): void {
    this.dialogRef.close();
  }

  onChooseCandidate(aid: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "400px",
      data: {
        question: "Are you sure you want to choose this candidate?",
        confirmText: "choose",
        closeText: "no",
      }
    })

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (!confirmed) return;
      this.isLoadingSubmit = true;
      this.cdr.detectChanges();
      this.appService.chooseCandidate(this.data.id, aid).subscribe({
        next: (response) => {
          this.isLoadingSubmit = false;
          this.loadCandidates();
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.log(err);
          this.isLoadingSubmit = false;
          this.cdr.detectChanges();
        }
      })
    })
  }
}
