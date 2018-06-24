import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {

  private ROOT_URL = 'http://api.apixu.com/v1/forecast.json?key=29d83fa2298a47d29bb121845161212&days=7&q=';
  constructor(private http: HttpClient) { }

  getWeather(sity: string): Observable<any> {
    const rout = this.ROOT_URL + sity;
    return this.http.get(rout);
  }
}
