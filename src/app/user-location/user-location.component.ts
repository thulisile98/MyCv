
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

declare const L: any;
declare const mapboxgl: any;
@Component({
  selector: 'app-user-location',
  templateUrl: './user-location.component.html',
  styleUrls: ['./user-location.component.scss']
})
export class UserLocationComponent implements OnInit {
  public weather: any;
  lat: any;
  lon: any;
  date: Date | undefined;
  constructor(private WeatherService: WeatherService) { }
  ngOnInit() {
    this.getWeatherData();
    if (navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;

      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );

      mapboxgl.accessToken = 'pk.eyJ1IjoibWFudWVsbWFrd2FsZSIsImEiOiJjbGJzZ3NwYmwxM25vM29rZXNkenk4OGpyIn0.WI5-grW3T_YOAWcBvsMvow';
      const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [position.coords.longitude, position.coords.latitude], // starting position [lng, lat]
        zoom: 10, // starting zoom
        tileSize: 512,
        zoomOffset: -1,
      });

      const marker = new mapboxgl.Marker().setLngLat([position.coords.longitude, position.coords.latitude]).addTo(map);

      this.getWeatherData();
    });

  }


  getWeatherData() {
    this.WeatherService.getWeatherData(this.lat, this.lon).subscribe((Response) => {
      this.weather = Response;
      console.log(this.weather);
      this.date = new Date(this.weather.dt * 1000);


      console.log(this.date);


    });

  }



















  watchPosition() {
    let deslat = 0;
    let deslon = 0;
    let id = navigator.geolocation.watchPosition((position) => {
      console.log(
        `lat:${position.coords.latitude},lon:${position.coords.longitude}`
      );
      if (position.coords.latitude == deslat) {
        navigator.geolocation.clearWatch(id);
      }
    }, (err) => {
      console.log(err);
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }
    )


  }
}



