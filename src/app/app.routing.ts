import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoNaoEcontradoComponent } from './cursos/curso-nao-econtrado/curso-nao-econtrado.component';

const APP_ROUTES: Routes = [
    { path: 'cursos', component: CursosComponent },
    { path: 'curso/:id', component: CursoDetalheComponent},
    { path: 'curso-nao-encontrado', component: CursoNaoEcontradoComponent},
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

