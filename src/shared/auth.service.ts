import { Observable, BehaviorSubject } from 'rxjs';

export class AuthService {
  
  public user:BehaviorSubject<any> = new BehaviorSubject({role:'client'});
  
}