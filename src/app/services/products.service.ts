import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { ProductInterface } from '../interfaces/product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private fireStore: Firestore) {}

  getProduct(): Observable<ProductInterface[]> {
    const productsRef = collection(this.fireStore, 'productInterface');
    return collectionData(productsRef, { idField: 'id' }) as Observable<ProductInterface[]>;
  }

  addProduct(productInterface: ProductInterface) {
    const productsRef = collection(this.fireStore, 'productInterface');
    return addDoc(productsRef, productInterface);
  }

  deleteProduct(product: ProductInterface) {
    const productsRef = doc(this.fireStore, `productInterface/${product.id}`);
    return deleteDoc(productsRef);
  }

}
