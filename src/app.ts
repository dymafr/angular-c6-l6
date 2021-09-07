import {Component, NgModule, VERSION} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import{ IfRoleDirective } from './shared/permissions.directive';
import{ AuthService } from './shared/auth.service';

@Component({
  selector: 'my-app',
  template: `
    <select #selectRole>
      <option value="admin">admin</option>
      <option value="client">client</option>
      <option value="manager">manager</option>
    </select>
    
    <button (click)="login(selectRole.value)">Login</button>
  
    <div *ifRole="'admin'">
      Que pour les admins
    </div>
    
    <div *ifRole="'client'">
      Que pour les clients
    </div>
    
    <div *ifRole="'manager'">
      Que pour les managers
    </div>
  `,
})

export class AppComponent {
  constructor(private authService : AuthService) {}
  
  login(roleSelect:string) {
    this.authService.user.next({role:roleSelect});
  }
}

// Ne pas oublier de déclarer notre directive dans le module :
@NgModule({
  imports: [ BrowserModule ],
  providers: [ AuthService ],
  declarations: [ AppComponent, IfRoleDirective ],
  bootstrap: [ AppComponent ] 
})
export class AppModule {}