import { Component, OnInit, Input, Injectable } from '@angular/core';
import { WeatherService } from '../core/weather.service';
import { HomeComponent } from '../home/home.component';
import { DataService } from '../core/data.service';
import { HeaderComponent } from '../header/header.component';
import { ForecastComponent } from '../forecast/forecast.component';
import { StorageService } from '../core/storage.service';
import { Router } from '@angular/router';
import { Search } from '../models/search';
import { Weather } from '../models/weather';



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {

  public weather: Weather;
  public data;
  public forecastDay = [];
  switch: boolean;
  innerWidth: number;
  isMobile = false;
  search: Search;

  constructor(private weatherService: WeatherService, private dataService: DataService,
    private storageService: StorageService, private router: Router) { }

  ngOnInit() {
    this.data = this.dataService.serviceData;
    if (!this.data) {
      this.router.navigate(['pageNotFound']);
    } else {
      this.innerWidth = this.dataService.innerWidth;
      if (this.innerWidth < 767) {
        this.isMobile = true;
      }
      this.search = {
        sity: this.data.location.name,
        time: this.data.location.localtime
      };

      this.storageService.addSearch(this.search);
      const a = this.storageService.getSearch();
      if (a.length > 5) {
        this.storageService.removeSearch();
      }

      this.weather = {
        name: this.data.location.name,
        dateTime: this.data.location.localtime,
        temp: this.data.current.temp_c,
        icon: this.data.current.condition.icon,
        text: this.data.current.condition.text,
        fiels: this.data.current.feelslike_c,
        wind: this.data.current.vis_km,
        humidity: this.data.current.humidity,
      };

      this.forecastDay = this.data.forecast.forecastday;
    }
  }

  show(): boolean {

    if (this.switch) {
      this.switch = false;
    } else {
      this.switch = true;
    }
    return false;
  }
}
