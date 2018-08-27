import { Injectable } from '@angular/core';
import {Authenticate} from '../models/authenticate';
import {UserBase} from '../models/user-base';
import { Observable, of, throwError } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, mergeMap, take} from 'rxjs/operators';
import {User} from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;
  private selectedUser = null;
  private readonly api = `api/users`;

  constructor(
    private http: HttpClient
  ) { }

  login(auth: Authenticate): Observable<UserBase> {
    return this.http.get(`${this.api}?username=${auth.username}`).pipe(
      map(user => {
        this.isLoggedIn = true;
        return !!user ? user[0] as UserBase : null;
      })
    );
  }

  logout(): Observable<boolean> {
    this.isLoggedIn = false;
    return of(false);
  }

  check(): Observable<UserBase> {
    return of(this.isLoggedIn ? this.selectedUser : null);
  }

}
