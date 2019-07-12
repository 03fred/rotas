import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit {
  aluno: any;
  inscricao: Subscription;
  constructor(private route: ActivatedRoute,
    private alunoService: AlunoService,
    private router: Router) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.aluno = this.alunoService.getAluno(id);
      }
    );
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editarContato(){
    this.router.navigate(['/alunos',this.aluno.id,'editar']);
  }
}
