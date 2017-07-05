import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosService } from './cursos.service';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CursosComponent, CursoDetalheComponent],
  exports: [CursosComponent], // metadado > diz para o Angular quais declarações desse módulo que queremos export para outros módulos
  providers: [CursosService] // metadado > fornecedor
})

export class CursosModule { }
