import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import user1 from '../mocks/user1.mock.json';
import { UserDetails } from '../models/user-details.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getCurrentUser(): Observable<UserDetails> {
    return of(
      user1
    )
  }
}
