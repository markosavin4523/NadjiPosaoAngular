import { Component } from '@angular/core';
import { BlJobsRequesnService } from '../../bussines-logic/request/bl-jobs-requesn-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseValidationService } from '../../../../shared/validation/validation-messages/base-validation.service';
import { ICategory } from '../../../../shared/interfaces/i-category';
import { BlCategoriesRequestService } from '../../../admin-panel/categories/business-logic/requests/bl-categories-request.service';
import { ICreateJob } from '../../interfaces/i-create-job';
import { greaterThan } from '../../../../shared/validation/greater-than-validator';
import { CreateJobValidator } from '../../validation/create-job-validation';
import { notInPast } from '../../../../shared/validation/not-in-past-validator';
import { RangeSalaryValidator } from '../../../../shared/validation/range-salary-validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-job-page',
  standalone: false,
  templateUrl: './create-job-page.component.html',
  styleUrl: './create-job-page.component.scss',
})
export class CreateJobPageComponent {
  constructor(
    private service: BlJobsRequesnService,
    public validator: CreateJobValidator,
    private catService: BlCategoriesRequestService,
    private jobService: BlJobsRequesnService,
    private router : Router,
  ) { }

  categories: ICategory[] = [];
  subCategories: ICategory[] = [];

  form: any = new FormGroup({
    title: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    salaryFrom: new FormControl(null, greaterThan(0)),
    salaryTo: new FormControl(null, greaterThan(0)),
    deadline: new FormControl(null, [
      Validators.required,
      notInPast()
    ]),
    categoryId: new FormControl(null, Validators.required),
    subCategoryId: new FormControl(null),
  },
    { validators: RangeSalaryValidator.salaryCheck });

  apply() {
    this.jobService.create(this.getDataToSend()).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(["/jobs/my-jobs"]);
      },
      error: (err) => {
        console.log(err);
        if (Array.isArray(err.error)) {
          this.validator.setApiErrors(this.form, err.error);
        }
        console.log(err);
      }
    })
  }

  getDataToSend(): ICreateJob {
    const data = this.form.getRawValue();
    let category: number = data.subCategoryId ? data.subCategoryId : data.categoryId;
    return {
      title: data.title,
      description: data.description,
      salaryFrom: data.salaryFrom ?? null,
      salaryTo: data.salaryTo ?? null,
      deadline: data.deadline,
      categoryId: category,
    }
  }

  ngOnInit() {
    this.catService.getCategories().subscribe({
      next: (response) => {
        this.categories = response;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  onCategoryChange(id: number) {
    this.subCategories = [];
    this.form.get('subCategoryId')?.setValue(null);
    this.catService.getSubcategories(id).subscribe({
      next: (response) => {
        this.subCategories = response;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }



}
