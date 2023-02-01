import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection } from '@firebase/firestore';
import { UsersInterface } from '../interfaces/users-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private firestore: Firestore ) { }

  getUser(): Observable<UsersInterface[]> {
    const productsRef = collection(this.firestore, 'usuarios');
    return collectionData(productsRef, { idField: 'id' }) as Observable<UsersInterface[]>;
  }

  addUser(usersInterface: UsersInterface) {
    const userRef = collection(this.firestore, 'usuarios');
    return addDoc(userRef, usersInterface);
  }
}
