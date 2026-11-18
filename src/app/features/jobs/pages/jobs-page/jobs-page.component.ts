import { ChangeDetectorRef, Component } from '@angular/core';
import { BlJobsRequesnService } from '../../bussines-logic/request/bl-jobs-requesn-service';
import { IJobsSearch } from '../../interfaces/i-jobs-search';
import { IJob } from '../../interfaces/i-job';


@Component({
  selector: 'app-jobs-page',
  standalone: false,
  templateUrl: './jobs-page.component.html',
  styleUrl: './jobs-page.component.scss',
})
export class JobsPageComponent {

  constructor(private service: BlJobsRequesnService,
    private cdr: ChangeDetectorRef,

  ) { }

  jobs: IJob[] = [];

  onSearch(filter: IJobsSearch) {
    this.loadJobs(filter);
  }

  ngAfterViewInit() {

    this.loadJobs();

  }


  loadJobs(filter: IJobsSearch | null = null) {
    this.service.getAllJobs(filter).subscribe({
      next: (response) => {
        this.jobs = response.items;
        console.log(filter);
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
