import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'weather-now', component: WeatherComponent },
];
