import { Component, OnInit } from '@angular/core';
import { AgendaComponent } from './../agenda/agenda.component';
import { ContatoService } from './../contato/contato.service';
import { ServicosService } from './../servicos/servicos.service';
import { AgendaService } from './../agenda/agenda.service';


@Component({
  selector: 'app-nova-agenda',
  templateUrl: './nova-agenda.component.html',
  styleUrls: ['./nova-agenda.component.css']
})
export class NovaAgendaComponent implements OnInit {
  contatos: any;
  servicos: any;
  agenda: any = {
    id: 1,
    nome: "",
    horario: "",
    servico: ""
  };

  constructor(private contatoService: ContatoService, private servicoService: ServicosService, private agendaService: AgendaService) { }

  ngOnInit() {
    this.contatoService.listaTodos().subscribe(data=>{
      this.contatos = data;
    }),
    this.servicoService.listaTodos().subscribe(data=>{
      this.servicos = data;
    })
  }
  onSubmit(){
    
  }
  onAdd(){
    this.agendaService.envia(this.agenda);
    console.log(this.agenda.servico + " Foi enviado");
    
  }

}
