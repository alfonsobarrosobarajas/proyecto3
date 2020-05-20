import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Se agrega Modulo
import { ContactosComponent } from './contactos/contactos.component'


// Por útlimo, modificar el arreglo de las rutas ...
const routes: Routes = [


  { path: 'contactos', component: ContactosComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
