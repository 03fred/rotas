import { NgModule } from "@angular/core";

import { AlunosComponent } from './alunos.component';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.model';
import { AlunoService } from './aluno.service';

@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        AlunosRoutingModule
    ],
    exports: [],
    declarations: [AlunosComponent, AlunoFormComponent, AlunoDetalheComponent],
    providers: [AlunoService],

})

export class AlunosModule {}