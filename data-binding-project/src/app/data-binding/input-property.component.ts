import { Component } from '@angular/core';

@Component({
  selector: 'curso',
  template: '{{ nomeCurso }}',
})

export class InputPropertyComponent {
  nomeCurso: string = '';

  constructor() {  }
}
