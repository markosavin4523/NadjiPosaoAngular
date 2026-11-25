import { Component, Input } from '@angular/core';
import { IAdminProfile } from '../../interfaces/i-admin-profile';

@Component({
  selector: 'app-admin-data',
  standalone: false,
  templateUrl: './admin-data.component.html',
  styleUrl: './admin-data.component.scss',
})
export class AdminDataComponent {
  @Input({ required: true }) a!: IAdminProfile;
}
