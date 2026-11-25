import { Component, Input } from '@angular/core';
import { ICompanyProfile } from '../../interfaces/i-company-profile';

@Component({
  selector: 'app-company-data',
  standalone: false,
  templateUrl: './company-data.component.html',
  styleUrl: './company-data.component.scss',
})
export class CompanyDataComponent {
  @Input({ required: true }) c!: ICompanyProfile;
}
