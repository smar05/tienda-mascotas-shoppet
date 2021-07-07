import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './paginas/carrito/carrito.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LayoutComponent } from './paginas/layout/layout.component';
import { ProductoComponent } from './paginas/producto/producto.component';

const routes: Routes = [
  {path:'',redirectTo:'/layout',pathMatch:'full'},
  {path:'layout',component:LayoutComponent},
  {path:'inicio',component:InicioComponent},
  {path:'carrito',component:CarritoComponent},
  {path:'producto',component:ProductoComponent},
  {path:'**',redirectTo:'/layout',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
