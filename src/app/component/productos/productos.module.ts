import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CardComponent } from '../card/card.component';

const routes: Routes = [
  {
    path : '',
    component : ProductosComponent,
  },
]


@NgModule({
  declarations: [
    ProductosComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
})
export class ProductosModule { }
