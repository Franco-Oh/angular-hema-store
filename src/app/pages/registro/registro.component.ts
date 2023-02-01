import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersInterface } from 'src/app/interfaces/users-interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegister!:FormGroup;
  msgCorreoRepetido = false;
  msgRegistrado = false;
  counter:number = 5;

  datos: UsersInterface = {
    id:null,
    name:'',
    apellido:'',
    edad:null,
    email:'',
    password:'',
    perfil:'usuario'
  }

  constructor( private userservice:UsersService, private router:Router, private formBuilder:FormBuilder ){
    this.formRegister = new FormGroup({
      name: new FormControl(),
      apellido: new FormControl(),
      edad: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      name:['', 
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      apellido:['', 
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      edad:['', 
        [
          Validators.required,
          Validators.min(10)
        ]
      ],
      email:['', 
        [
          Validators.required,
          Validators.minLength(5),
          Validators.email
        ]
      ],
      password:['', 
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9]+$'),
          Validators.minLength(6)
        ]
      ]
    });
  }

  onSubmit(){
    console.log(this.formRegister.value);
    console.log(this.datos);
    
    this.userservice.registerUser(this.formRegister.value).then( response => {
      console.log(response);
      this.msgRegistrado = true;
      setTimeout(() => {
        this.counter--;
      }, 1000);
      setTimeout(() => {
        this.counter--;
      }, 2000);
      setTimeout(() => {
        this.counter--;
      }, 3000);
      setTimeout(() => {
        this.counter--;
      }, 4000);
      setTimeout(() => {
        this.msgRegistrado = false;
        this.router.navigate(['/login']);
      }, 5000);
    })
    .catch( error => {
      console.log(error);
      this.msgCorreoRepetido = true;
      setTimeout(() => {
        this.msgCorreoRepetido = false;
      }, 5000);
    });

  }

}
