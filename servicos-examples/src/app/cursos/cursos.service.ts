import { Injectable } from '@angular/core';

@Injectable() // digo ao angular que o serviço abaixo é auto injetável

export class CursosService {
  getCursos() {
    return ['Angular 4', 'Ionic 3', 'Java'];
  }
}
