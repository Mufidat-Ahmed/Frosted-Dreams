import { Injectable } from '@angular/core';
import { User } from '../shared/models/User';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IUserLogin } from '../shared/models/interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { LOGIN_URL, REGISTER_URL } from '../shared/models/urls';
import { ToastrService } from 'ngx-toastr';
import { Router, Route } from '@angular/router';
import { IURegister } from '../shared/models/interfaces/IURegister';
import { error } from 'console';

const USER_KEY = 'User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable:Observable<User>;

  constructor(private http:HttpClient, private toastrService:ToastrService,
    private router:Router
  ) {
    this.userObservable = this.userSubject.asObservable();
   }
   login(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>(LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome TO Frosted Dreams ${user.name}!`, "Login Successful")
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, "Login Failed");
        }
      })
    );
   }

   register(userRegister:IURegister): Observable<User>{
    return this.http.post<User>(REGISTER_URL, userRegister).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(`Welcome to Frosted Dreams ${user.name}`, 
            'Register Successful')
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Register Failed')
        }
      })
    )
   }

   private setUserToLocalStorage(user:User){
    localStorage.setItem(USER_KEY, JSON.stringify(user));
   }

   logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    this.router.navigate(['/login']);
   }
   
   private getUserFromLocalStorage():User{
    if (typeof localStorage === 'undefined') {
      console.warn('localStorage is not available');
      return new User();
    }
     const user = localStorage.getItem(USER_KEY);
     if(user) return JSON.parse(user) as User;
     return new User();
   }
}
