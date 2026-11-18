import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { SharedRoutingModule } from './shared-routing-module';
import { MatSelectModule } from '@angular/material/select';
import { AuthService } from './business-logic/auth.service';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     SharedRoutingModule,
     FormsModule,
     MatFormFieldModule, 
     MatInputModule,
     MatButtonModule,
     MatIconModule,
     ReactiveFormsModule,
     MatDatepickerModule,
     MatSelectModule,
     HttpClientModule
    ],
  exports: [
    FormsModule,
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule, 
    MatIconModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
    

  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    provideNativeDateAdapter()
  ]
})
export class SharedModule {}
