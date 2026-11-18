import { Component, Input } from '@angular/core';
import { IJob } from '../../interfaces/i-job';

@Component({
  selector: 'app-jobs-list',
  standalone: false,
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.scss',
})
export class JobsListComponent {
  @Input() jobs : IJob[] = [];
}
