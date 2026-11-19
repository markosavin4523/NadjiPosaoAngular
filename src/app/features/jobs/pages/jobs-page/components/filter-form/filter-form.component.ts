import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ICategory } from '../../../../../../shared/interfaces/i-category';
import { ICity } from '../../../../../../shared/interfaces/i-city';
import { BlJobsRequesnService } from '../../../../bussines-logic/request/bl-jobs-requesn-service';
import { BlCategoriesRequestService } from '../../../../../admin-panel/categories/business-logic/requests/bl-categories-request.service';
import { IJobsSearch } from '../../../../interfaces/i-jobs-search';

@Component({
  selector: 'app-filter-form',
  standalone: false,
  templateUrl: './filter-form.component.html',
  styleUrl: './filter-form.component.scss',
})
export class FilterFormComponent {

  constructor(
    private jobsService: BlJobsRequesnService,
    private categoriesService: BlCategoriesRequestService
  ) { }

  @Output() searchSubmitted = new EventEmitter<IJobsSearch>();

  subCategories: ICategory[] = [];
  categories: ICategory[] = [];
  cities: ICity[] = [];

  form: any = new FormGroup({
    titleKeyword: new FormControl<string>(''),
    categoryId: new FormControl<number | null>(null),
    subCategoryId: new FormControl<number | null>(null),
    cityId: new FormControl<number | null>(null),
    salaryFrom: new FormControl<number | null>(null),
    sortBy: new FormControl<string>('latest'),
  });

  ngOnInit() {
    this.jobsService.getAallFilterFormDropdownData().subscribe({
      next: (response) => {
        this.categories = response[0]
        this.cities = response[1]
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  apply() {
    if (this.form.invalid) return;
    const formValues: IJobsSearch = this.getDataToSend();
    this.searchSubmitted.emit(formValues);
  }

  resetFilters() {
    this.form.reset({
      titleKeyword: '',
      categoryId: null,
      subCategoryId: null,
      cityId: null,
      salaryFrom: null,
      sortBy: 'latest'
    });
    this.subCategories = [];


    this.searchSubmitted.emit(this.getDataToSend());
  }
  getDataToSend(): IJobsSearch {
      const data = this.form.getRawValue();
      let category : number | null = data.subCategoryId ? data.subCategoryId : data.categoryId;
      return {
        titleKeyword: data.titleKeyword,
        category: category,
        city: data.cityId,
        salaryFrom: data.salaryFrom,
        sortBy: data.sortBy,
        perPage: 6,
        page:1
      }
    }

  onCategoryChange(value: number) {
    this.subCategories = [];
    this.form.get('subCategoryId')?.setValue(null);
    this.categoriesService.getSubcategories(value).subscribe({
      next: (response) => {
        this.subCategories = response;
        
      },
      error: (err) => {

      }
    })
  }
}
