import { Component, OnInit } from '@angular/core';
import { Contacto } from './contacto';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  // Declaracion de arreglo de la clase Contacto
  contactos : any = [

    new Contacto(1, 'Gorgonio'),
    new Contacto(2, 'Benicio'),
    new Contacto(3, 'Sofocles')
    
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
