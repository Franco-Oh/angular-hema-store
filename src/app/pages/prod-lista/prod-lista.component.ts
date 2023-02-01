import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-prod-lista',
  templateUrl: './prod-lista.component.html',
  styleUrls: ['./prod-lista.component.css']
})
export class ProdListaComponent implements OnInit {

  products!:ProductInterface[]

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProduct().subscribe((product)=> {this.products = product})
  }

}
