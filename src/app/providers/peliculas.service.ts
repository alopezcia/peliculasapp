import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { apikeyV3, apikeyV4 } from './config';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private urlMoviedbV3: string = 'https://api.themoviedb.org/3/movie/550';

  constructor(private http: HttpClientModule,
              private jsonp: HttpClientJsonpModule ) {}

  getPopulares() {
    // let url = `${ this.urlMoviedb}/discover/moview `; 
  }            
}
