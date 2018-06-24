import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { WeatherModule } from './weather/weather.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharingModule } from './sharing/sharing.module';
import { LocalStorageModule } from '@ngx-pwa/local-storage';
// import { ErrorComponent } from './error/error.component';
// import { ForecastComponent } from './forecast/forecast.component';
// import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // ErrorComponent,
    // ForecastComponent,
    // HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    WeatherModule,
    CoreModule,
    HttpClientModule,
    SharingModule,
    LocalStorageModule,
  ],
  exports: [
    // HeaderComponent,
    // WeatherModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
