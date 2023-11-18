import { Component, Input } from '@angular/core';
import { writers_data } from 'src/app/sharedData/writers';

@Component({
  selector: 'app-writers',
  templateUrl: './writers.component.html',
  styleUrls: ['./writers.component.scss']
})
export class WritersComponent {
  writersData = writers_data
}
