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
  contactos : any = [];

  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {

    this.contactoService.getContacts().subscribe(
      res => {

        this.contactos = res;
      },
      err => {
        console.log(err);
      }

    );

  }

}
