import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../core/data.service';
import { HeaderComponent } from '../header/header.component';
import { WeatherService } from '../core/weather.service';
import { StorageService } from '../core/storage.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService,
    private weatherService: WeatherService, private storageService: StorageService) { }

  public innerWidth: number;
  public sity: string;
  public data;
  public isError = false;
  public input;
  public loading: boolean;
  public searches;
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.dataService.innerWidth = this.innerWidth;
    this.searches = this.storageService.getSearch();
    // console.log('local' + this.searches);


  }

  sityFormsData(sityForm: NgForm) {

    this.sity = sityForm.value.sity;
    sityForm.resetForm();
    this.searchFunc(this.sity);
  }

  searchFunc(sityName: string) {
    this.loading = true;
    this.weatherService.getWeather(sityName).subscribe(res => {
      this.data = res;
      this.dataService.serviceData = this.data;
      this.loading = false;
      this.router.navigate(['weather-now']);
    },
      (err) => {
        this.dataService.serverStatus = err.status;
        this.loading = false;
        this.router.navigate(['error']);
      });
  }

}
