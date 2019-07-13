import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEcontradoComponent } from './curso-nao-econtrado/curso-nao-econtrado.component';

const cursosRoutes: Routes = [
    { path: '', component: CursosComponent },
    { path: ':id', component: CursoDetalheComponent},
    { path: 'curso-nao-encontrado', component: CursoNaoEcontradoComponent},

];

@NgModule({
    imports: [RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule]
})
export class CursosRoutingModule {}