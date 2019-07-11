import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEcontradoComponent } from './curso-nao-econtrado/curso-nao-econtrado.component';

const APP_ROUTES: Routes = [
    { path: 'cursos', component: CursosComponent },
    { path: 'curso/:id', component: CursoDetalheComponent},
    { path: 'curso-nao-encontrado', component: CursoNaoEcontradoComponent},
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent }
]



@NgModule({
imports:[RouterModule.forRoot(APP_ROUTES)],
exports:[RouterModule]
    
})
export class AppRoutingModule{




}