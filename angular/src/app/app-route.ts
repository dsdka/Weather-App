import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { ErrorComponent } from './sharing/error/error.component';

import { PageNotFoundComponent } from './sharing/page-not-found/page-not-found.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'weather-now', component: WeatherComponent },
    { path: 'error', component: ErrorComponent },
    { path: '**', component: PageNotFoundComponent }
];
