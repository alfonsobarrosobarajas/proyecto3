import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Contacto } from '../contactos/contacto';
@Injectable({
  providedIn: 'root'
})
export class ContactoService {


  API_URI = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getContacts() {

    return this.http.get(`${this.API_URI}/contacto/list`);

  }

  getContact(id: any) {
    return this.http.get(`${this.API_URI}/contacto/${id}`);

  }


  saveConcept(concept: Contacto) {

    return this.http.post(`${this.API_URI}/contacto`, concept);

  }


  updateConcept(id, update) {
    return this.http.put(`${this.API_URI}/contacto/${id}`, update);

  }

  deleteConcept(id: string) {
    return this.http.delete(`${this.API_URI}/contacto/${id}`);


  }


}