import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from '@angular/common/http';
import { request } from 'http';
import { UserService } from './services/user.service';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userService: UserService){}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>{
  const user = this.userService.currentUser;
  if(user.token){
    request = request.clone({
      setHeaders:{
        accessToken: user.token
      }
    })
  }
  return next.handle(request);
  }}
