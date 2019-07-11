import { Component, OnInit } from '@angular/core';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
cursos: any[];
  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
  }

}
