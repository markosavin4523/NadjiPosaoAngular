import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ICategory } from '../../../../../../shared/interfaces/i-category';
import { ICity } from '../../../../../../shared/interfaces/i-city';

@Component({
  selector: 'app-filter-form',
  standalone: false,
  templateUrl: './filter-form.component.html',
  styleUrl: './filter-form.component.scss',
})
export class FilterFormComponent {

  subCategories : ICategory[] = [];
  categories : ICategory[] = [];
  cities : ICity[] = [];

  form : any = new FormGroup({
    keyword: new FormControl<string>(''),
    categoryId: new FormControl<number | null>(null),
    subCategoryId: new FormControl<number | null>(null),
    cityId: new FormControl<number | null>(null),
    salaryFrom: new FormControl<number | null>(null),
    sortBy: new FormControl<string>('latest'),
  });

  ngOnInit()
  {
    
  }

  apply()
  {

  }

  resetFilters()
  {

  }

  onCategoryChange(value : number)
  {

  }
}
