import { Injectable } from '@angular/core';
import {Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private auth:Auth) { }

  registerUser({email, password}:any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({email, password}:any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout(){
    return signOut(this.auth);
  }

  authState(){
    return authState(this.auth);
  }
}
