import {Component} from '@angular/core';
import {AuthenticationService} from '../login/authentication.service';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';


@Component({
    selector: 'userComponent',
    providers: [AuthenticationService],
    templateUrl: 'app/user/user.component.html'
})

@Injectable()
export class UserComponent {

    constructor(private _service:AuthenticationService, public http: Http){}

    ngOnInit(){
        this._service.checkCredentials();
        this.http.get('http://localhost:8080/api/users/current').subscribe((response) => {
            console.log(response);
        })
    }

    logout() {
        this._service.logout();
    }
}
