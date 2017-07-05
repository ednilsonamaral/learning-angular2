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

Também conseguimos escutar um evento, click no link/botão, etc. São valores que vão do template para o componente, quando o usuário interage com a nossa página.


### Two-way data binding: `[(ngModel)]="propriedade"`

É quando nós associamos um modelo, e esse mesmo modelo é atualizada, e quando o componente é modificado o template também é atualizado.


## Utilizando Pré-Processadores CSS

Para novos projetos: `ng new novo-projeto --style=stylus` (sass / scss / less / stylus).  

Para projetos em andamento: `ng set defaults.styleExt scss` (scss / less / styl). Porém, ele não atualiza para os componentes já existentes. Só irá mudar quando criamos novos componentes.


## Gerando build para produção

Existe dois tipos de builds possíveis com Angular 2, um para **desenvolvimento** e um para **produção**.

`ng build --target=development --environment=dev`  
`ng build --dev --e=dev`  
`ng build --dev`  

O *build* vai ser gerado dentro do diretório `./dist/`. O arquivo `./dist/main.bundle.js` contém todo o código do nosso projeto, HTML, componentes, CSS. Já o arquivo `./dist/polyfills.bundle.js` contém um código auxiliar que irá ajudar o browser a renderizar todo o nosso código.

`ng build --target=production --environment=prod`  
`ng build --prod --e=prod`  
`ng build --prod`  


## Instalando Bibliotecas (Bootstrap, jQuery, Lodash, Materialize, etc)

Na documentação oficial do Angular CLI é possível encontrar manuais de instalação de algumas bibliotecas, como Angular Material, Bootstrap, etc. O exemplo abaixo é de como instalar o Bootstrap.

Comando: `npm install --save bootstrap`  

Os imports de estilos e códigos JS das bibliotecas devemos adicionar no arquivo `angular-cli.json`.


## Diretivas

São uma forma de passarmos instruções para nossos templates e para nosso código HTML. Elas nos dão um enorme poder.


### Diretivas Estruturais

São utilizadas para interagirem com a view e modificam a estrutura do DOM e/ou nosso código HTML. Por exemplo: `*ngFor` (`ng-repeat` do ng1) e `*ngIf`.


### Diretivas de Atributos

Não modificam a estrutura do DOM mas interagem com o elemento em que foram aplicadas. Por exemplo: `ng-class` e `ng-style`.


### ngIf

Ela possui o mesmo comportamento que a condição `if` tem em linguagens de programação, como no JavaScript, por exemplo.

```html  
<div *ngIf="cursos.length > 0">
  <h4>Lista de Cursos Aqui</h4>
</div>
```

No exemplo acima, ele só irá exibir a div caso a nossa variável *cursos* tenha algum valor dentro. Ele é recomendado para árvore de elementos grandes.


### Property Binding [hidden]

```html  

<div [hidden]="!mostrarCursos">
  <h4>Lista de Cursos Aqui</h4>
</div>
```

Nesse outro exemplo, fazemos a mesma coisa, porém com *property binding*. Ele é recomendado para árvore de elementos pequenos. Uma vantagem do `[hidden]` é que ele é muito menos custoso caso o custo de criar a árvore de elementos seja muito grande.


### ngSwitch e ngSwitchCase

Funciona da mesma maneira que o `switch case` das linguagens de programação, como por exemplo, o JavaScript. Por exemplo:

```html  
<nav class="navbar navbar-dark bg-primary">
  <div class="nav navbar-nav">
    <a class="nav-item nav-link"
       [class.active]="aba == 'home'"
       (click)="aba = 'home'">Home</a>
    <a class="nav-item nav-link"
      [class.active]="aba == 'mapa'"
      (click)="aba = 'mapa'">Mapa</a>
    <a class="nav-item nav-link"
    [class.active]="aba == 'lista'"
    (click)="aba = 'lista'">Lista</a>
  </div>
</nav>

<div class="container" [ngSwitch]="aba"  >
  <p *ngSwitchCase="'mapa'">Modo Mapa ativado</p>
  <p *ngSwitchCase="'lista'">Modo Lista ativado</p>
  <p *ngSwitchDefault>Home</p>
</div>
```


### ngFor

Permite que seja iterado um array através de um loop for. É similar ao loop for que utilizamos nas linguagens de programação, como por exemplo, o JavaScript.

```html  
<ul>
  <li *ngFor="let curso of cursos, let i = index">{{ i }} - {{ curso }}</li>
</ul>
```


### Sobre o * e template

```html  
<ul>
  <li *ngFor="let curso of cursos, let i = index">{{ i }} - {{ curso }}</li>
</ul>


<h5>Removendo o * e usando template</h5>

<ul>
  <li template="ngFor let curso of cursos, let i = index">{{ i }} - {{ curso }}</li>
</ul>

<ul>
  <template ngFor [ngForOf]="cursos" let-curso let-i="index">
    <li>{{ i }} - {{ curso }}</li>
  </template>
</ul>
```


### ngClass

É apenas uma forma de diferente de escrevermos um código similar a *property binding class*.


### ngStyle

É uma diretiva estrutural, semelhante a diretiva **ngClass**.

```html  
<button
  [ngStyle]="{
    'backgroundColor': (ativo ? 'blue' : 'gray'),
    'color': (ativo ? 'white' : 'black'),
    'fontWeight': (ativo ? 'bold' : 'normal'),
    'fontSize': tamanhoFonte + 'px'
  }"

  (click)="mudarAtivo()"
>Mudar atributo 'ativo'
</button>
```


### Operador Elvis (?)

```html  
<p><strong>Responsável com Elvis:</strong> {{ tarefa.responsavel?.usuario?.nome}}</p>
```


### ng-content

É mais ou menos o mesmo que o **ngTransclude** fazia no Angular 1. Possui duas formas de exibir os dados, sendo:

```html  
// app.component.html
<app-exemplo-ng-content>
  Conteúdo passado para o componente.
</app-exemplo-ng-content>

// component.html
<div class="panel panel-default">
  <div class="panel-heading">
    Título blablabla
  </div>

  <div class="panel-body">
    Texto mimimi
  </div>
</div>
```

Ou então, através de seletores:

```html  
// app.html
<app-exemplo-ng-content>
  <div class="titulo">Título do bangue</div>
  <div class="corpo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quia natus ipsum eligendi laboriosam ullam veniam doloremque reiciendis sit, accusamus maiores eius quod a distinctio est deserunt tempora, minus eaque.</div>
</app-exemplo-ng-content>

// component.html
<div class="panel panel-default">
  <div class="panel-heading">
    <ng-content select=".titulo"></ng-content>
  </div>

  <div class="panel-body">
    <ng-content select=".corpo"></ng-content>
  </div>
</div>
```


### Diretivas Customizadas

#### ElementRef / Renderer

**ElementRef** faz referência a algum elemento do DOM, enquanto o **Renderer** é o renderizador também responsável por fazer modificações no DOM.


```js  
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef) {
    console.log(this._elementRef);

    _elementRef.nativeElement.style.backgroundColor = "yellow";
  }

}
```

```html  
<p fundoAmarelo>Texto com fundo amarelinho!</p>
```

Utilizar **ElementRef** pode trazer algumas vulnerabilidades para a nossa aplicação. Na própria documentação do Angular 2, é recomendado não utilizá-lo! Ao invés dele, é recomendado utilizar o **Renderer**.

```js  
import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {
  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer) {
      console.log(this._renderer);

      this._renderer.setElementStyle(
        this._elementRef.nativeElement, 'background-color', 'yellow'
      );
    }
}
```


#### HostListener / HostBinding

```js  
import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})

export class HighlightMouseDirective {

  @HostListener('mouseenter') onmouseover() {
    this._renderer.setElementStyle(
      this._elementRef.nativeElement, 'background-color', '#dcdcdc'
    );

    this._renderer.setElementStyle(
      this._elementRef.nativeElement, 'cursor', 'not-allowed'
    );
  }

  @HostListener('mouseleave') onmouseleave() {
    this._renderer.setElementStyle(
      this._elementRef.nativeElement, 'background-color', '#fff'
    );
  }

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
  ) { }
}
```

```html  
<p highlightMouse>Texto com highligth quando passo o mouse!</p>
```

Ao invés de ficarmos repetindo código, iremos utilizar o **HostBinding**. Exemplo:

```js  
import { Directive, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})

export class HighlightMouseDirective {

  @HostListener('mouseenter') onmouseover() {
    this.backgroundColor = '#dcdcdc';
    this.cursorMouse = 'not-allowed';
  }

  @HostListener('mouseleave') onmouseleave() {
    this.backgroundColor = '#fff';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.cursor') cursorMouse: string;

  constructor( ) { }
}
```

O **HostListener** vai ficar escutando um determinado evento no hospedeiro da diretiva. Já o **HostBinding** permite que façamos o binding/associção de um atributo à uma variável.

Caso seja necessário realizar alguma operação/manipulçãoa antes de definirmos o binding, podemos utilizar os getters and setters. Exemplo:

```js  
@HostBinding('style.cursor') get setCursor() {
  return this.cursorMouse;
}

private cursorMouse: string;
```


#### Input e Property Binding

```js  
import { Directive, HostListener, HostBinding, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})

export class HighlightDirective {
  @HostListener('mouseenter') onmouseover() {
    this.backgroundColor = this.highlightColor;
    this.cursorMouse = 'not-allowed';
  }

  @HostListener('mouseleave') onmouseleave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.cursor') cursorMouse: string;

  @Input() defaultColor: string = '#fff';
  @Input () highlightColor: string = '#dcdcdc';

  constructor( ) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
```


Mas, caso queiramos simplificar nosso código, precisaremos fazer conforme exemplo:

```html  
<p [highlight]="'red'" [defaultColor]="'grey'">
  Texto com highlight com cores customizadas.
</p>
```

```js  
import { Directive, HostListener, HostBinding, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})

export class HighlightDirective {
  @HostListener('mouseenter') onmouseover() {
    this.backgroundColor = this.highlightColor;
    this.cursorMouse = 'not-allowed';
  }

  @HostListener('mouseleave') onmouseleave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.cursor') cursorMouse: string;

  @Input() defaultColor: string = '#fff';
  @Input ('highlight') highlightColor: string = '#dcdcdc';

  constructor( ) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
```


#### ngOnInit

É executado quando o componente inicializar.

```js  
ngOnInit() {
  this.backgroundColor = this.defaultColor;
}
```


#### Criando uma diretiva de estrutura (ngElse)

```js  
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  @Input() set ngElse(cond: boolean) {
    if (!cond) {
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainerRef.clear();
    }
  }

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) { }

}
```

```html  
<div *ngIf="mostrarCursos">
  Lista de cursos aqui.
</div>

<div *ngElse="mostrarCursos">
  Não existem cursos para serem listados.
</div>
```


## Serviços

É por onde iremos nos conectar em um servidor, no back-end. Para criar os arquivos do nosso serviço de forma automática, basta executarmos o comando `ng g s cursos/cursos` no terminal. Onde, **g** é para **gerar** e **s** é a abreviação de **service**.

Enquanto os componentes são responsáveis pela iteração com o usuário, os serviços devem possuir a comunicação com o back-end e ter as lógicas de negócio.


### Padrão Singleton

É quando criamos um mesmo serviço em diferentes módulos de nossa aplicação, porém a aplicação realiza a chamada desse serviço uma única vez, independente do número de instâncias.

Se optarmos por mostrar o nosso serviço para toda a aplicação, então devemos declarar ele dentro de `app.module.ts`. Mas, caso queiramos que ele fique vísivel apenas para os módulos de funcionalidades, então devemos declará-lo em cada módulo de funcionalidade. Assim os componentes declarados nesse módulo de funcionalidade terão acesso a esse serviço.


## Pipes

Os pipes são os filtros que utilizavamos no Angular 1. Ele transforma um valor e podemos mostrar esse valor transformado dentro de um template.


### Criar um novo pipe

Para criar um novo pipe via terminal, basta executarmos o comando: `ng g p nome-pipe`.


### Pipe "puro"

Ele não olha as modificações que são passadas como pârametros no método `transform` do *pipe*.


### Pipe "impuro"


## Links das aulas

- [Curso de Angular 2](https://www.youtube.com/playlist?list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G), da Loiane Groner
