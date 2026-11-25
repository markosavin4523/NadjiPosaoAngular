import { Component } from '@angular/core';
import { BlJobsRequesnService } from '../../bussines-logic/request/bl-jobs-requesn-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-job-page',
  standalone: false,
  templateUrl: './create-job-page.component.html',
  styleUrl: './create-job-page.component.scss',
})
export class CreateJobPageComponent {
  constructor(
    private service : BlJobsRequesnService,
  ){}

  form : any = new FormGroup({
    title : new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    salaryFrom : new FormControl("",Validators.max(3)),
    salaryTo : new FormControl(""),
    deadline : new FormControl(null, Validators.required),
    categoryId : new FormControl(null, Validators.required)
  });

  apply()
  {

  }

}
