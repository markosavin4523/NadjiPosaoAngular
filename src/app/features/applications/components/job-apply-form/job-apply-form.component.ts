import { Component, Inject, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseValidationService } from '../../../../shared/validation/validation-messages/base-validation.service';
import { BlApplicationRequestService } from '../../business-logic/requests/bl-application-request.service';
import { IApplicationFormData } from '../../interfaces/i-application-form-data';

@Component({
  selector: 'app-job-apply-form',
  standalone: false,
  templateUrl: './job-apply-form.component.html',
  styleUrl: './job-apply-form.component.scss',
})
export class JobApplyFormComponent {

  selectedFile: File | null = null;
  sentMessage = signal<boolean>(false);
  errMessage = signal<string | null>(null);


  constructor(
    private dialogRef: MatDialogRef<JobApplyFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public validator: BaseValidationService,
    private service : BlApplicationRequestService,
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
    const dataToSend = this.getDataToSend();
    this.service.apply(this.id ?? 0, dataToSend).subscribe({
      next : (response) => {
        this.sentMessage.set(true);
        setTimeout(() => {
          this.close(true);
        }, 2000);

      },
      error: (err) =>{
        this.validator.setApiErrors(this.form, err.error);
        this.errMessage.set(err.error.message);
    
      }
    })
  }

  ngOnInit()
  {
    this.id = this.data.id;
    this.job = this.data.job;
  }

  getDataToSend() : IApplicationFormData
  {
    const data = this.form.getRawValue();
    return {
      message : data.message,
      cvPath : this.selectedFile
    }
  }


  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedFile = input.files?.[0] ?? null;

    input.value = '';
  }
}
