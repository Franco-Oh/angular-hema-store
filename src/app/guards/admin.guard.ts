import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersInterface } from '../interfaces/users-interface';
import { UserDataService } from '../services/user-data.service';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  userActual!:UsersInterface[]

  constructor(private userData:UserDataService, private usersService: UsersService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    var userLoggedIn: any;

    this.usersService.authState().subscribe((data) => {
      console.log('desde el adminGuard, iniciado sesion---> '+data);
      if (data) {
        const id = data.uid;
        this.userData.getUser(id).then((user) => {
            const { name, apellido, edad, email, password, perfil } = user.data() as UsersInterface;
            userLoggedIn = {
              id,
              name,
              apellido,
              edad,
              email,
              password,
              perfil,
            };
          }).catch(console.error);
      } else {
        userLoggedIn = null;
        console.log('desde el adminGuard, no hay sesion---> '+userLoggedIn)
      }
    });

    if (userLoggedIn.perfil === 'admin'){
      console.log('Hola Admin!')
      return true;
    } else {
      alert('Tienes que ser administrador para entrar.')
      this.router.navigate(['/home'])
      return false
    }
  }
  
}
