import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  getCursos() {
    return [
      {
        id: 1, nome: 'Angular2'
      },
      { id: 2, nome: 'Java' }
    ]

  }

  getCurso(id: number){
    let cursos = this.getCursos();
     
    for( let i = 0; i < cursos.length;i++){
         if(id == cursos[i].id)
         return cursos[i];
    }
  return null;

  }
  constructor() { }
}
