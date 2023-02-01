import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  products!:ProductInterface[]

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProduct().subscribe((product)=> {this.products = product})
  }

}
