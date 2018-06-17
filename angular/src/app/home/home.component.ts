import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../core/data.service';
import { HeaderComponent } from '../header/header.component';
import { WeatherService } from '../core/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService,
    private weatherService: WeatherService) { }

  public innerWidth: number;
  public sity;
  public data;
  public isError = false;
  public input;
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    this.dataService.innerWidth = this.innerWidth;
  }

  sityFormsData(sityForm: NgForm) {
    this.sity = sityForm.value;
    console.log(this.sity);
    sityForm.resetForm();
    this.weatherService.getWeather(this.sity.sity).subscribe(res => {
      this.data = res;
      this.dataService.serviceData = this.data;
      this.router.navigate(['weather-now']);
    },
      (err) => {
        this.isError = true;
      });
  }

}
