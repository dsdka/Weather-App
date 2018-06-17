import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../core/weather.service';
import { HomeComponent } from '../home/home.component';
import { DataService } from '../core/data.service';
import { HeaderComponent } from '../header/header.component';
import { ForecastComponent } from '../forecast/forecast.component';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weather;
  public data;
  public forecastDay = [];
  switch: boolean;
  innerWidth: number;
  isMobile = false;
  constructor(private weatherService: WeatherService, private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.serviceData;
    this.innerWidth = this.dataService.innerWidth;
    if (this.innerWidth < 767) {
      this.isMobile = true;
    }
    // console.log(this.dataService.serviceData);

    // this.weatherService.getWeather(this.sity.sity).subscribe(res => {
    //   this.data = res;
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
    //   console.log(this.data);

    this.forecastDay = this.data.forecast.forecastday;
    console.log(this.forecastDay);
    // });
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
