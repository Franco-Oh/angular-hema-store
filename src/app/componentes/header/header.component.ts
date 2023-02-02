import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';
import { UsersInterface } from 'src/app/interfaces/users-interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLoggedIn: UsersInterface | null = null;

  constructor(private usersService:UsersService, private userData:UserDataService, private router:Router) { }

  ngOnInit(): void {
    // this.usersService.authState().subscribe((data) => {
    //   console.log('desde el navbar, iniciado sesion---> '+ JSON.stringify(data));
    //   if (data) {
    //     const id = data.uid;
    //     console.log('desde el navbar, id de la sesion---> ' + data.uid);
    //     this.userData.getUser(data.uid).then((user) => {
    //       console.log('desde el navbar, datos que no compilan---> '+(user.data() as UsersInterface));
    //         const { name, apellido, edad, email, password, perfil } = user.data() as UsersInterface;
    //         this.userLoggedIn = {
    //           id,
    //           name,
    //           apellido,
    //           edad,
    //           email,
    //           password,
    //           perfil,
    //         };
    //       })
    //       .catch(console.error);
    //   } else {
    //     this.userLoggedIn = null;
    //     console.log('desde el navbar, no hay sesion---> '+this.userLoggedIn)
    //   }
    // });
  }

  logout(){
    this.usersService.logout();
    this.router.navigate(['/login'])
  }

}
