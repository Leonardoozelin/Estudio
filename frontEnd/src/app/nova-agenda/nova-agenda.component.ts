import { Component, OnInit } from '@angular/core';
import { AgendaComponent } from './../agenda/agenda.component';
import { ContatoService } from './../contato/contato.service';
import { ServicosService } from './../servicos/servicos.service';
import { AgendaService, Agenda } from './../agenda/agenda.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-nova-agenda',
  templateUrl: './nova-agenda.component.html',
  styleUrls: ['./nova-agenda.component.css'],
  providers: [AgendaService, ServicosService, ContatoService]
})
export class NovaAgendaComponent implements OnInit {
  contatos: any;
  servicos: any;
  private model: Agenda = new Agenda();


  constructor(private contatoService: ContatoService, private servicoService: ServicosService, private agendaService: AgendaService) { }

  ngOnInit() {
    this.contatoService.listaTodos().subscribe(data=>{
      this.contatos = data;
    }),
    this.servicoService.listaTodos().subscribe(data=>{
      this.servicos = data;
    })
    this.model.id = '1';
  }
  onSubmit(){
    
  }
  onAdd(){
    this.agendaService.envia(this.model);     
  }

}
