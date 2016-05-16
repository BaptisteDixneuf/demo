import {Component} from '@angular/core';
import {AuthenticationService} from '../login/authentication.service'

@Component({
    selector: 'userComponent',
    providers: [AuthenticationService],
    templateUrl: 'app/user/user.component.html'
})

export class UserComponent {

    constructor(
        private _service:AuthenticationService){}

    ngOnInit(){
        this._service.checkCredentials();
    }

    logout() {
        this._service.logout();
    }
}
