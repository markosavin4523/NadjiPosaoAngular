import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { from } from 'rxjs';
import { BaseValidationService } from '../../../../shared/validation/validation-messages/base-validation.service';
import { IJob } from '../../../jobs/interfaces/i-job';

@Component({
  selector: 'app-job-apply-form',
  standalone: false,
  templateUrl: './job-apply-form.component.html',
  styleUrl: './job-apply-form.component.scss',
})
export class JobApplyFormComponent {

  selectedFile: File | null = null;


  constructor(
    private dialogRef: MatDialogRef<JobApplyFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public validator: BaseValidationService
  ) { }

  id : number | null = null;
  job: any = null;

  form : any = new FormGroup({
    message : new FormControl("", Validators.required),
    cvPath: new FormControl(null,Validators.required)
    
  });

  close(state: boolean = false): void {
    this.dialogRef.close(state);
  }

  onApply()
  {

  }

  ngOnInit()
  {
    this.id = this.data.id;
    this.job = this.data.job;
  }


  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedFile = input.files?.[0] ?? null;

    input.value = '';
  }
}
