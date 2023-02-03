import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, getDoc } from '@firebase/firestore';
import { map, Observable } from 'rxjs';
import { ProductInterface } from '../interfaces/product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private fireStore: Firestore) {}

  getProductById(index:string){
    const productsRef = collection(this.fireStore, 'productInterface');
    return collectionData(productsRef, { idField: 'id' }).pipe(map((data) => {
      return data.map((docData) => {
        const product = {
          nombre: docData["nombre"],
          foto: docData["foto"],
          precio: docData["precio"],
          descripcion: docData["descripcion"],
          oferta: docData["oferta"],
          stock: docData["stock"],
        };
        return product;
      });
    }),map((products:ProductInterface[]) => products.filter((product: ProductInterface) => product.id === index)
    ));
  }

  getOneProduct(id: string) {
    const productRef = doc(this.fireStore, `productInterface/${id}`);
    return getDoc(productRef);
  }

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
