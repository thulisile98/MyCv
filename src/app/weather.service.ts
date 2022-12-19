import { UserLocationComponent } from './user-location/user-location.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(private http: HttpClient) { }

  getWeatherData(lat: any, lon: any): Observable<any> {

    // lat = -37.840935;
    // lon = 144.9446457;
    let apiId = '1264fdc9e9d82b792fa13845b3f216f8';

    let queryString = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=${apiId}`;
    return this.http.get(queryString);


  }
}



