import { Component, Input } from '@angular/core';
import { IUserProfile } from '../../interfaces/i-user-profile';

@Component({
  selector: 'app-user-data',
  standalone: false,
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.scss',
})
export class UserDataComponent {
  @Input({ required: true }) u!: IUserProfile;
}
