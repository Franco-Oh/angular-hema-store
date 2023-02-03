import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-prod-detalle',
  templateUrl: './prod-detalle.component.html',
  styleUrls: ['./prod-detalle.component.css']
})
export class ProdDetalleComponent implements OnInit {

  detalles!:any;
  otro!:any

  constructor(private rutaActiva:ActivatedRoute, private products:ProductsService) { }

  ngOnInit(): void {
    this.detalles = this.rutaActiva.snapshot.params['id']; //para obtener el id
    console.log('viene de prod detalle, es el id ---> ' + this.detalles);
    this.products.getOneProduct(this.detalles).then(data =>{
      this.otro = data.data();
      this.otro.id = data.id;
      console.log(this.otro);
    });
  }

  getData(id:string){
    this.products.getProductById(id).subscribe(data => {
      console.log('viene de prod detalle ---> ' + data);
    })
  }
}
