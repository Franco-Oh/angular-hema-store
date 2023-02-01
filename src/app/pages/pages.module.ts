import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from  'src/app/app-routing.module';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ProdRegistroComponent } from './prod-registro/prod-registro.component';
import { ProdListaComponent } from './prod-lista/prod-lista.component';
import { ProdDetalleComponent } from './prod-detalle/prod-detalle.component';



@NgModule({
  declarations: [
    HomeComponent,
    NosotrosComponent,
    ProductosComponent,
    CarritoComponent,
    LoginComponent,
    RegistroComponent,
    ProdRegistroComponent,
    ProdListaComponent,
    ProdDetalleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent,
    NosotrosComponent,
    ProductosComponent,
    CarritoComponent,
    LoginComponent,
    RegistroComponent,
    ProdRegistroComponent,
    ProdListaComponent,
    ProdDetalleComponent
  ]
})
export class PagesModule { }
