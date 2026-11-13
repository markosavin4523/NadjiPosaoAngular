import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { SharedRoutingModule } from './shared-routing-module';

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
     ReactiveFormsModule
    ],
  exports: [
    FormsModule,
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule, 
    MatIconModule,
    ReactiveFormsModule
    

  ]
})
export class SharedModule {}
