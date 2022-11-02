import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FbAuthResponse, User } from "../interfaces";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import {map, tap} from "rxjs/operators"
 
@Injectable()
export class AuthService {
    constructor(private http:HttpClient) {}

    get token(): string|null {
        if (localStorage.getItem('fb-token')) {
            const expDate  = new Date(localStorage.getItem('fb-token-exp')!.toString())
            if (new Date() > expDate) {
                this.logout()
                return null
            }
            return localStorage.getItem('fb-token')
        }
        return localStorage.getItem('fb-token')
    }

    login(user: User): Observable<any> {
        localStorage.clear;
        user.returnSecureToken = true;
        localStorage.setItem('email', user.email);
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,user)
        .pipe(
            tap(this.setToken)
        )
        console.log('fdsfsd');
    }

    signup (user: User): Observable<any> {
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKey}`,user)
    }

    logout(){
        this.setToken(null)
    }

    isAuthenticated(): boolean {
        return !!this.token
    }

    getProfile() {
        if (localStorage.getItem('email')){
            return localStorage.getItem('email')!;
        }
        else return null
    }

    private setToken(response: FbAuthResponse | any | null) {
        if (response) {
            const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
            localStorage.setItem('fb-token', response.idToken)
            localStorage.setItem('fb-token-exp', expDate.toString())
        } else {
            localStorage.clear()
            console.log('Logout')
        }
    }
}