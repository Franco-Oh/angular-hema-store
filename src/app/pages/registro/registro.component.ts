import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersInterface } from 'src/app/interfaces/users-interface';
import { UserDataService } from 'src/app/services/user-data.service';
import { UsersService } from 'src/app/services/users.service';
import { MyValidations } from 'src/app/utils/my-validations';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegister!:FormGroup;
  msgCorreoRepetido = false;
  msgRegistrado = false;
  respuestaRegistro:any;

  datos: UsersInterface = {
    id:null,
    name:null,
    apellido:null,
    edad:null,
    email:null,
    password:null,
    perfil:''
  }

  constructor( private usersService:UsersService, private userData:UserDataService, private router:Router, private formBuilder:FormBuilder, private firestore: Firestore ){
    this.formRegister = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      apellido: new FormControl(),
      edad: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      perfil: new FormControl(),
      // pass2: new FormControl()
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
      ],
      perfil:['', 
        [
          Validators.required,
        ]
      ],
      // pass2:['', 
      //   [
      //     MyValidations.claveAdmin,
      //     Validators.required
      //   ]
      // ]
    });
  }

  onSubmit(){
    console.log(this.formRegister.value);
    console.log(this.datos);
    
    this.usersService.registerUser(this.formRegister.value).then( response => {
      this.respuestaRegistro = response;
      this.msgRegistrado = true;
      if (this.respuestaRegistro) {
        console.log('exito al crear usuario');
        this.datos.id = this.respuestaRegistro.user.uid;
        console.log('nuevo id --->' + this.datos.id);
        console.log('todos los datos --->' + JSON.stringify(this.datos));
        this.userData.addUser(this.datos);
      }
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
