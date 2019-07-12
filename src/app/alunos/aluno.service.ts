import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private alunos: any[] = [
    { id: 1, nome: 'Aluno 01',email:'aluno01@gnmail.com'},
    { id: 2, nome: 'Aluno 02',email:'aluno01@gnmail.com'},
    { id: 3, nome: 'Aluno 03',email:'aluno01@gnmail.com'}
  ]
  getAluno(id: number){
    let alunos = this.getAlunos();
     
    for( let i = 0; i < alunos.length;i++){
         if(id == alunos[i].id)
         return alunos[i];
    }
  return null;

  }

  getAlunos(){
    return this.alunos;
  }
  constructor() { }
}
