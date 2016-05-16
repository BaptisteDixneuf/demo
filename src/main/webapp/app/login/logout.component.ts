import {Component} from '@angular/core';
import {AuthenticationService} from './authentication.service';

@Component({
    selector: 'logout',
    providers: [AuthenticationService],
    template: 'Déconnexion'
})

export class LogoutComponent {
    
   constructor(private _service:AuthenticationService) {}

   ngOnInit() {
    this._service.logout();
  }
}