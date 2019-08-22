import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { apikeyV3, apikeyV4 } from './config';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private urlMoviedbV3: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient ) {}

  getPopulares() {
     const url = `${ this.urlMoviedbV3}/discover/moview?sort_by=popularity.desc&api_key=${apikeyV3}&language=es`;
     return this.http.jsonp(url, 'callback');
  }

}
