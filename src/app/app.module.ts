import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ServiciosComponent } from './servicios/servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactosComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
