import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
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
import { EditaAgendaComponent } from './edita-agenda/edita-agenda.component';
import { EditaClienteComponent } from './edita-cliente/edita-cliente.component';
import { NovoServicoComponent } from './novo-servico/novo-servico.component';
import { EditaServicoComponent } from './edita-servico/edita-servico.component';
import { EditaProdutosComponent } from './edita-produtos/edita-produtos.component';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';
import { NovaVendaComponent } from './nova-venda/nova-venda.component';
import { EditaVendaComponent } from './edita-venda/edita-venda.component';
import { VendasComponent } from './vendas/vendas.component';

//simport services
import { AgendaService } from './agenda/agenda.service';
import { ContatoService } from './contato/contato.service';
import { ProdutosService } from './produtos/produtos.service';
import { ServicosService } from './servicos/servicos.service';
import { VendasService } from './vendas/vendas.service';



//Rotas
const appRoutes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  //Listagem
  { path: 'contato', component: ContatoComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'vendas', component: VendasComponent },
  //Edicao de daos
  { path: 'editaAgenda/:id', component: EditaAgendaComponent },
  { path: 'editaContato/:id', component: EditaClienteComponent },
  { path: 'editaServico/:id', component: EditaServicoComponent },
  { path: 'editaVendas/:id', component: EditaVendaComponent },
  { path: 'editaProduto/:id', component: EditaProdutosComponent },
  //Novos Cadastros
  { path: 'cadastraContato', component: CadastraClienteComponent },
  { path: 'novaAgenda', component: NovaAgendaComponent },
  { path: 'novoservico', component: NovoServicoComponent },
  { path: 'novoProduto', component: NovoProdutoComponent },
  { path: 'novaVenda', component: NovaVendaComponent }
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
    ServicosComponent,
    EditaAgendaComponent,
    EditaClienteComponent,
    NovoServicoComponent,
    EditaServicoComponent,
    EditaProdutosComponent,
    NovoProdutoComponent,
    NovaVendaComponent,
    EditaVendaComponent,
    VendasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule,
    FormsModule
  ],
  providers: [AgendaService, ContatoService, ProdutosService, ServicosService, VendasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
