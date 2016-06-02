import {Component} from '@angular/core';
import {AuthenticationService} from '../login/authentication.service';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {User} from './user';

@Component({
    selector: 'userComponent',
    providers: [AuthenticationService],
    templateUrl: 'app/user/user.component.html'
})

@Injectable()
export class UserComponent {

    public id: number;
    public username: String;
    
    constructor(private _service:AuthenticationService, public http: Http){}

    ngOnInit(){
        this._service.checkCredentials();
        this.http.get('http://localhost:8080/api/users/current').subscribe(
            data => { 
                
               this.id = data.json().id;
               this.username = data.json().username;
            },
            err => { 
                console.log(err) 
            }
        );
    }

    logout() {
        this._service.logout();
    }
}
