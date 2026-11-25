import { Component, computed, signal } from '@angular/core';
import { BlProfileRequestService } from '../../bussines-logic/request/bl-profile-request.service';
import { IUserProfile } from '../../interfaces/i-user-profile';
import { ICompanyProfile } from '../../interfaces/i-company-profile';
import { IAdminProfile } from '../../interfaces/i-admin-profile';
import { AuthService } from '../../../../shared/business-logic/auth.service';

@Component({
  selector: 'app-user-profile-page',
  standalone: false,
  templateUrl: './user-profile-page.component.html',
  styleUrl: './user-profile-page.component.scss',
})
export class UserProfilePageComponent {

  constructor(
    private service : BlProfileRequestService,
    private authService : AuthService,
    
  ){}

  profile = signal<IUserProfile | ICompanyProfile | IAdminProfile | null>(null);
  role = signal<string | null>(null);

  userProfile = computed<IUserProfile | null>(() => {
    const p = this.profile();
    return p && this.role()?.toLowerCase() === 'user' ? (p as IUserProfile) : null;
  });

  companyProfile = computed<ICompanyProfile | null>(() => {
    const p = this.profile();
    return p && this.role()?.toLowerCase() === 'company' ? (p as ICompanyProfile) : null;
  });

  adminProfile = computed<IAdminProfile | null>(() => {
    const p = this.profile();
    return p && this.role()?.toLowerCase() === 'admin' ? (p as IAdminProfile) : null;
  });

  ngAfterContentInit() 
  {
    this.loadData();
  }

  loadData()
  {
    this.role.set(this.authService.getUserRole());
    this.service.getProfileInfo().subscribe({
      next: (response) => {
        this.profile.set(response);

       // console.log(this.profile())
      },
      error: (err) =>
      {
        console.log(err);
      }
    })
  }
}
