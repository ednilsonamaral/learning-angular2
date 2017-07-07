import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  curso_id: string;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute) {
    // console.log(this.route);
    // this.curso_id = this.route.snapshot.params['curso_id']; // nao ouve as mudancas
  }

  ngOnInit() {
    // se inscreve em params para ouvir as mudancas
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.curso_id = params['curso_id'];
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
