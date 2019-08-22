import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  HttpClient,
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpClientModule,
  HttpClientJsonpModule
  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';

@Injectable()
export class CustomInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    console.log(next);
    return next.handle(req);
  }
}

@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true}
  ]
})
export class JsonpInterceptingModule {}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    JsonpInterceptingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, multi: true, useClass: CustomInterceptor }],
  bootstrap: [AppComponent]
})
export class AppModule { }
