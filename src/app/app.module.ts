import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
//import { CursosModel } from './cursos/cursos.module';
//import { AlunosModule } from './alunos/alunos.model';
import { FormsModule } from '@angular/forms';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent /*,
    CursosComponent
    CursoDetalheComponent,
    CursoNaoEcontradoComponent*/
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //CursosModel,
   // AlunosModule,
    AppRoutingModule
    ///routing
  ],
  providers:[AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
