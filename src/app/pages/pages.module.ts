import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    HomeComponent,
    NosotrosComponent,
    ProductosComponent,
    CarritoComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    NosotrosComponent,
    ProductosComponent,
    CarritoComponent,
    LoginComponent
  ]
})
export class PagesModule { }
