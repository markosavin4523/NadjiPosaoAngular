import { Component } from '@angular/core';
import { BlCategoriesRequestService } from '../../categories/business-logic/requests/bl-categories-request.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICreateCategory } from '../../categories/interfaces/i-create-category';
import { ICategory } from '../../../../shared/interfaces/i-category';
import { BaseValidationService } from '../../../../shared/validation/validation-messages/base-validation.service';

@Component({
  selector: 'app-categories-page',
  standalone: false,
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.scss',
})
export class CategoriesPageComponent {

  constructor(
    private service : BlCategoriesRequestService,
    public validator : BaseValidationService

  ){}

  rootCategories : ICategory[] = [];
  message : string = "";

  form : any = new FormGroup({
    name : new FormControl("", Validators.required),
    parentId : new FormControl(null)
  });

  getDataToSend() : ICreateCategory
  {
    const data = this.form.getRawValue();
    return {
      name  : data.name.trim(),
      parentId : data.parentId, 
    }
  }

  onSubmit()
  {
    const data= this.getDataToSend();
    this.service.createCategory(data).subscribe({
      next : (response) => {
        this.message = "Category Added"
        this.resetForm();
      },
      error: (err) => {
        console.log(err);
        this.validator.setApiErrors(this.form, err.error);
      }
    })
  }

  resetForm() {
  this.form.reset({
    name: ' ',
    parentId: null
  });
}

  ngOnInit()
  {
    this.loadRootCategories();

  }

  loadRootCategories() : void
  {
    this.service.getCategories().subscribe({
      next: (response) => {
        this.rootCategories = response
      },
      error : (err) => {
        console.log(err);
      }
    })
  }
}
