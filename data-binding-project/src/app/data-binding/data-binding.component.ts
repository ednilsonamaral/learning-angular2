import { Component, OnInit } from '@angular/core';

import { InputPropertyComponent } from './input-property.component';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
  directives: [InputPropertyComponent]
})

export class DataBindingComponent implements OnInit {
  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/sports/';
  nome: string = 'aaaa';

  pessoa = {
    nome: '',
    idade: 18
  };

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  onClick() {
    alert('clicooou!');
    console.log('clicooooou!');
  }

  onKeyup(e:KeyboardEvent) {
    console.log('event > ', e);
  }

  conteudoSalvo: string = '';

  onSave(value: string) {
    this.conteudoSalvo = value;
  }

  constructor() {}

  ngOnInit() {}
}
