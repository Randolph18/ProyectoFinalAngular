import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './component/signup/sign-up.component';
import { NewProductoComponent } from './component/new-producto/new-producto.component';
import { Auth0Guard } from './auth0.guard';

const routes: Routes = [

  {path: 'home', 
   loadChildren: () => import ('../app/component/home/home.module').then(m => m.HomeModule)},

  {path: 'productos',
   loadChildren: () => import ('../app/component/productos/productos.module').then(m => m.ProductosModule)},

  {path: 'carrito',
   loadChildren: () => import ('../app/component/carrito/carrito.module').then(m => m.CarritoModule)},

  {path: 'login',
  loadChildren: () => import ('../app/component/login/login.module').then(m => m.LoginModule)},

  {path: 'newProducto', component: NewProductoComponent, canActivate:[Auth0Guard]},

  {path: 'signup', component: SignUpComponent},

  {path: '', pathMatch: 'full', redirectTo:'/home'},


  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
