import { Component } from '@angular/core'

@Component({
  selector: 'meu-primeiro-component', // nome da tag HTML que iremos usar ao chamar o componente no HTML
  // templateUrl: 'meu-primeiro-component.html',
  template: `
    <p>Meu primeiro componente em Angular 2!</p>
  `
})

export class MeuPrimeiroComponent {}
