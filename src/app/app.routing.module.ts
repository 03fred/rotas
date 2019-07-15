import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AlunosModule } from './alunos/alunos.model';
import { AuthGuard } from './guards/auth.guard';

const APP_ROUTES: Routes = [
  {path:'cursos', canActivate: [AuthGuard], loadChildren: './cursos/cursos.module#CursosModule'},
  {path:'alunos', canActivate: [AuthGuard], loadChildren:()=> AlunosModule},
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}
  
]



@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]

})
export class AppRoutingModule {




}