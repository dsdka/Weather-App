import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  @Input()
  infoDays;

  constructor() { }

  ngOnInit() {
  }

}
