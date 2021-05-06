import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UserDTO } from './userDTO';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private UserUrl = 'api/users';
  private users: UserDTO[];

constructor( private http: HttpClient) { }

// To get list of users in memory
getUsersapi(): Observable<UserDTO[]> {
  if (this.users) {
    return of(this.users);
  }
  return this.http.get<UserDTO[]>(this.UserUrl)
    .pipe(
      tap(data => console.log(JSON.stringify(data))),
      tap(data => this.users = data),
      catchError(this.handleError)
    );
}

newUsers(): UserDTO {
  return {
    id: 0,
    firstname: '',
    lastname: '',
    phone: null,
    email:'',
    budget : 0,
    currency: ''
  };
}

PostUserapi(user: UserDTO): Observable<UserDTO> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const newUsers = { ...user, id: null };
  return this.http.post<UserDTO>(this.UserUrl, newUsers, { headers })
    .pipe(
      tap(data => console.log('postUser: ' + JSON.stringify(data))),
      tap(data => {
        this.users.push(data);
      }),
      catchError(this.handleError)
    );
}

private handleError(err: any) {
  if (err instanceof ErrorEvent) {
    swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `An error occurred: ${err.error.message}`,
    })
  } else {
    swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `Backend returned code ${err.status}: ${err.body}`,
    })
  }
  console.error(err);
  return throwError(err);
}
}
