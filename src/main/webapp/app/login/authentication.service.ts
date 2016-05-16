import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Http, Headers, Request, RequestOptions, RequestOptionsArgs, RequestMethod, Response } from '@angular/http';

export class User {
  constructor(public username: string,public password: string) { }
}


@Injectable()
export class AuthenticationService {
  
   public static NAME_JWT: string = "jwt";
   public static URL_LOGIN = "http://localhost:8080/api/login";

  constructor(private _router: Router, public http: Http){}
    
  saveJwt(jwt) {
    if(jwt) {
      localStorage.setItem(AuthenticationService.NAME_JWT, jwt)
    }
  }
  
  logError(err) {
    console.error('There was an error: ' + err);
  }

  logout() {
    localStorage.removeItem(AuthenticationService.NAME_JWT);
    this._router.navigate(['/login']);
  }

  login(user){
    
    let creds = JSON.stringify({ username: user.username, password: user.password });
    
    this.http.post(AuthenticationService.URL_LOGIN, creds)
      .subscribe(
        data => {
          this.saveJwt(data);
          this._router.navigate(["/user"]); 
          return true;
        },
        err => {
          console.log(err);
        },
        () => console.log('Authentication Complete')
      );
    return false;
  }

   checkCredentials( ){
    if (localStorage.getItem(AuthenticationService.NAME_JWT) === null){
        this._router.navigate(['/login']);
    }
  } 
}