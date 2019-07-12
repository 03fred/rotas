import { Component, OnInit } from '@angular/core';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {

  private alunos: any[];
  constructor(private alunoService: AlunoService) {

   this.alunos = alunoService.getAlunos();
  }

  ngOnInit() {
  }

}
