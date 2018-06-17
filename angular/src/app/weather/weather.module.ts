import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { HeaderComponent } from '../header/header.component';
import { ForecastComponent } from '../forecast/forecast.component';



@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    WeatherComponent,
    HeaderComponent,
    ForecastComponent
  ],
  exports: [
    HeaderComponent,
  ]
})
export class WeatherModule { }
