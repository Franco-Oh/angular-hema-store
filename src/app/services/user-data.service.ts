import { Injectable } from '@angular/core';
import { Firestore, collectionData, getDoc } from '@angular/fire/firestore';
import { addDoc, collection, doc } from '@firebase/firestore';
import { UsersInterface } from '../interfaces/users-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private firestore: Firestore ) { }

  getUser(uid: string) {
    const userRef = doc(this.firestore, `usuarios/${uid}`);
    return getDoc(userRef);
  }

  addUser(usersInterface: UsersInterface) {
    const userRef = collection(this.firestore, 'usuarios');
    return addDoc(userRef, usersInterface);
  }
}
