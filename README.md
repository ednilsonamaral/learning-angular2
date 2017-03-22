# Learning Angular 2

O Angular 2 foi totalmente reescrito, do zero, em uma parceria entre **Google + Microsoft**. Então, não é necessário aprender Angular 1.x antes de aprender Angular 2.x.

Ele possui oito blocos principais, sendo eles:  

* Componentes  
É a view. Os componentes encapsulam templates (código HTML), metadatas, data binding, formulários, os comportamentos da view, etc.

Toda aplicação que criarmos com Angular 2, iremos criar uma aplicação orientada a componentes.

É recomendado que as regras de negócio sejam escritas através de um serviço, que por sua vez vai comunicar-se com o *back-end*. Não é recomendado escrevermos as regras de negócio em alguma parte dos nossos componentes. Além disso, os serviços podem ser injetados em outras classes, através da **injeção de dependência**.


## Angular CLI

Para instalar o Angular CLI, basta executar no terminal o seguinte comando: `npm install -g @angular/cli`. Para visualizar a versão instalada, basta executar no terminal o seguinte comando.


### Hello World

Vamos criar um hello world com Angular 2 utilizando o Angular CLI para criar nosso template. Para isso, basta executar no terminal o seguinte comando: `ng new nome-projeto`.

Para criar os componentes com Angular 2, é possível criá-los manualmente ou via terminal, com comando.  

Manualmente, basta criarmos uma pasta em `./app/` com o nome do nosso componente. E então, criar os seguintes arquivos:  

* `meu-primeiro.component.ts`;  
* `meu-primeiro.component.html`;  
* `meu-primeiro.component.css`.  

Para criar um componente automaticamente, basta executar o seguinte comando no terminal: `ng g c nome-do-componente`, onde **g** para **gerar** e **c** é a abreviação de **component**. Com esse comando, ele cria os arquivos necessários e já declara o componente no `app.module.ts`.


## TypeScript  

A maioria dos projetos em Angular 2 são escritos em TypeScript. O próprio Angular 2 foi escrito em TypeScript. Ele é como se fosse um super conjunto do JavaScript. Ele é mantido pela Microsoft.

Para instalar o TypeScript, basta executar no terminal o seguinte comando: `npm install -g typescript`. Para compilar os arquivos em TypeScript, basta executar o comando `tsc main.ts` no terminal.


## Módulos

É o arquivo (`app.module.ts`) que nos ajudará a organizar nossa aplicação e também vai nos ajudar a modularizar nossa aplicação. Podemos criar automaticamente um novo módulo de funcionalidade em nossa aplicação, bastando executar o comando `ng g m nome-do-modulo` no terminal. Onde, **g** é para **gerar** e **m** é a abreviação de **module**.

Um módulo de funcionalidade é um novo módulo dentro da nossa aplicação que servirá para nossas funcionalidades. Por exemplo, podemos ter um módulo **admin** em nossa aplicação.

No arquivo `app.module.ts`, que é nosso módulo raiz da aplicação, temos as seguintes declarações:  

```js  
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
```

Já nos arquivos dos módulos de funcionalidade, normalmente temos:  

```js  
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CursosComponent, CursoDetalheComponent],
  exports: [CursosComponent] // metadado > diz para o Angular quais declarações desse módulo que queremos export para outros módulos
})

export class CursosModule { }
```


Caso queiramos criar um novo componente dentro de um módulo de funcionalidade, basta executarmos no terminal o seguinte comando: `ng g c cursos/curso-detalhe`.


## Serviços

É por onde iremos nos conectar em um servidor, no back-end. Para criar os arquivos do nosso serviço de forma automática, basta executarmos o comando `ng g s cursos/cursos` no terminal. Onde, **g** é para **gerar** e **s** é a abreviação de **service**.


## Injeção de Dependênica (DI)

É fazer com que o Angular nos forneça automaticamente uma instância de uma determinada classe de serviço. Assim não precisamos criar essa instância manualmente.


## Formas de Fazermos o Data Binding

No Angular 2 existem 4 formas de fazermos o data binding. O data binding é uma forma de associar uma informação em algum elemento do nosso template.


### Interpolação: `{{ valor }}`

Pegamos um valor de um atríbuto e conseguimos ter a saída dessa informação em nosso template.  

```html  
<p>
  String renderizada com interpolação: <a href="{{ url }}" target="_blank">{{ url }}</a>.
</p>
```


### Property binding (binding de propriedade): `[propriedade]="valor"`

```html  
<img [src]="urlImagem">

<div class="alert alert-danger" role="alert" [style.display]="classe.value == 'alert-danger' ? 'block' : 'none'">
  esse texto aparece só quando o cara seleciona erro
</div>
```

### Escutando eventos: `(evento)="handler"`

Também conseguimos escutar um evento, click no link/botão, etc.  


### Two-way data binding: `[(ngModel)]="propriedade"`
