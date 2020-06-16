import { Component, OnInit } from '@angular/core';
import { Contacto } from './contacto';
import { ContactoService } from './contacto.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  // Declaracion de arreglo de la clase Contacto
  contactos: any = [];
  contacto: Contacto;

  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {

    this.contacto = new Contacto();
    this.listContactos();

  }


  listContactos() {

    this.contactoService.getContacts().subscribe(
      res => {

        this.contactos = res;
      },
      err => {
        console.log(err);
      }

    );

  }

  agregarContacto(contacto: Contacto) {

    this.contactoService.saveContact(contacto)
      .subscribe(
        data => {
          this.listContactos();
        },
        error => {
          console.log(error)
        }
      );


  }


}
