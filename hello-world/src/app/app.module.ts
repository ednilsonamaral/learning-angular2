import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // para formulários
import { HttpModule } from '@angular/http'; // para requisições HTTP

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

// Importando novos módulos
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [ // metadado > listar todos os componentes, diretivas e pipes que iremos utilizar nesse módulo
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  imports: [ // metadado > outros módulos que iremos utilizar nesse módulo ou dentro de algum componente que pertença a esse módulo
    BrowserModule,
    FormsModule,
    HttpModule,
    CursosModule // Importando módulo do cursos component
  ],
  providers: [], // metadado > os serviços que vão ficar disponíveis para todos os componentes declarados nesse módulo
  bootstrap: [AppComponent] // metadado > diz qual é o componente que deve ser instanciado quando iniciamos nossa aplicação
})

export class AppModule { }
