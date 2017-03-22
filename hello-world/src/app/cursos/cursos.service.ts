import { Injectable } from '@angular/core';

@Injectable() // decorator

export class CursosService {
  constructor() {}

  getCursos() {
     return ['Java', 'Angular 2', 'Phonegap/Cordova'];
  }
}
