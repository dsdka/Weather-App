import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from './weather.service';
import { DataService } from './data.service';
import { StorageService } from './storage.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    WeatherService,
    DataService,
    StorageService
  ]
})
export class CoreModule { }
