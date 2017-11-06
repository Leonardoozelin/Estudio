import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//import component 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { CadastraClienteComponent } from './cadastra-cliente/cadastra-cliente.component';
import { AgendaComponent } from './agenda/agenda.component';
import { NovaAgendaComponent } from './nova-agenda/nova-agenda.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ServicosComponent } from './servicos/servicos.component';

//simport services
import { AgendaService } from './agenda/agenda.service';
import { ContatoService }  from './contato/contato.service';
import { ProdutosService } from './produtos/produtos.service';
import { ServicosService } from './servicos/servicos.service';


//Rotas
const appRoutes: Routes = [
   {path: '', redirectTo: "/home", pathMatch: "full"},
   {path: 'home', component: HomeComponent},
   {path: 'contato', component: ContatoComponent},
   {path: 'cadastraContato', component: CadastraClienteComponent},
   {path: 'agenda', component: AgendaComponent},
   {path: 'novaAgenda', component: NovaAgendaComponent},
   {path: 'produtos', component: ProdutosComponent},
   {path: 'servicos', component: ServicosComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    CadastraClienteComponent,
    AgendaComponent,
    NovaAgendaComponent,
    ProdutosComponent,
    ServicosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
    appRoutes
  ),
    HttpClientModule,
    FormsModule
  ],
  providers: [AgendaService, ContatoService, ProdutosService, ServicosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
