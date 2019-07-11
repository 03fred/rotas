import { NgModule } from "@angular/core";

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEcontradoComponent } from './curso-nao-econtrado/curso-nao-econtrado.component';
import { CursoService } from './curso.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports:[CommonModule,
    RouterModule],
    exports:[],
    declarations:[
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEcontradoComponent
    ],
    providers:[CursoService]
})
export class CursosModel{}