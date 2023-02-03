import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { ProdListaComponent } from './pages/prod-lista/prod-lista.component';
import { ProdRegistroComponent } from './pages/prod-registro/prod-registro.component';
import { ProdDetalleComponent } from './pages/prod-detalle/prod-detalle.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'newuser', component: RegistroComponent},
  {path:'nosotros', component: NosotrosComponent},
  {path:'productos', component: ProductosComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path:'detalle/:id', component: ProdDetalleComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path:'carrito', component: CarritoComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path:'lista', component: ProdListaComponent, canActivate: [AdminGuard]},
  {path:'newprod', component: ProdRegistroComponent, canActivate: [AdminGuard]},
  {path:'**', pathMatch: 'full', redirectTo: 'home'}
];

// canActivate:[AdminGuard]}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
