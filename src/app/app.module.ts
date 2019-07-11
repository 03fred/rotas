import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { CursosModel } from './cursos/cursos.module';
import { AlunosModule } from './alunos/alunos.model';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent /*,
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEcontradoComponent*/
  ],
  imports: [
    BrowserModule,
    CursosModel,
    AlunosModule,
    AppRoutingModule
    ///routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
