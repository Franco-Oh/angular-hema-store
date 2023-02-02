import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-prod-registro',
  templateUrl: './prod-registro.component.html',
  styleUrls: ['./prod-registro.component.css']
})
export class ProdRegistroComponent implements OnInit {

  formRegister!:FormGroup

  msgRegistrado = false;

  constructor(private productsService:ProductsService, private formBuilder:FormBuilder, private router:Router) {
    this.formRegister = new FormGroup({
      nombre: new FormControl(),
      precio: new FormControl(),
      oferta: new FormControl(),
      stock: new FormControl(),
      foto: new FormControl(),
      descripcion: new FormControl(),
    })
  }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      nombre:['', 
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],
      precio:['', 
        [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(1)
        ]
      ],
      oferta:['', 
        [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(1)
        ]
      ],
      stock:['', 
        [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(1)
        ]
      ],
      foto:['', 
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      descripcion:['', 
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ]
    });
  }

  async onSubmit(){
    console.log(this.formRegister.value);
    const response = this.productsService.addProduct(this.formRegister.value);
    console.log('desde el prod registro---> '+ response);
    this.msgRegistrado = true;
    setTimeout(()=>{
      this.formRegister.reset();
    }, 1000)
    
    setTimeout(()=>{
      this.msgRegistrado = false;
      this.router.navigate(['/lista']);
    }, 5000)
  }

}

