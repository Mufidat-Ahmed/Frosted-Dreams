import { Injectable } from '@angular/core';
import { User } from '../shared/models/User';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IUserLogin } from '../shared/models/interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { LOGIN_URL } from '../shared/models/urls';
import { ToastrService } from 'ngx-toastr';

const USER_KEY = 'User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable:Observable<User>;

  constructor(private http:HttpClient, private toastrService:ToastrService) {
    this.userObservable = this.userSubject.asObservable();
   }
   login(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>(LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            "Welcome TO Frosted Dreams $(user.name)!", "Login Successful")
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, "Login Failed");
        }
      })
    );
   }
   private setUserToLocalStorage(user:User){
    localStorage.setItem(USER_KEY, JSON.stringify(user));
   }

   logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
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