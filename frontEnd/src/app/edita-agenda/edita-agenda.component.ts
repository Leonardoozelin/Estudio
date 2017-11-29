import { Component, OnInit } from '@angular/core';
import { AgendaComponent } from './../agenda/agenda.component';
import { ContatoService } from './../contato/contato.service';
import { ServicosService } from './../servicos/servicos.service';
import { AgendaService, Agenda } from './../agenda/agenda.service';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edita-agenda',
  templateUrl: './edita-agenda.component.html',
  styleUrls: ['./edita-agenda.component.css']
})
export class EditaAgendaComponent implements OnInit {
  contatos: any;
  servicos: any;
  private model: Agenda = new Agenda();
  
  constructor(private contatoService: ContatoService, private servicoService: ServicosService, private agendaService: AgendaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.contatoService.listaTodos().subscribe(data => {
      this.contatos = data;
      this.servicoService.listaTodos().subscribe(data => {
        this.servicos = data;
        this.route.params.subscribe((params: Params) => {
          var id = params['id'];
          this.getById(id);
        });
      });
    });


  }
  getById(id) {
    return this.agendaService.getAgenda(id).subscribe(data => this.listaDados(data));
  }
  listaDados(data) {
    this.model._id = data._id;
    this.model.id = data.id;
    this.model.horario = data.horario;
    this.model.nome = data.nome;
    this.model.servico = data.servico;
  }
  onSend() {
    this.agendaService.atualizaAgenda(this.model).subscribe(
      function () {
        alert("Enviado com Sucesso");
      },
      function (erro) {
        console.log(erro);
      }
    );
  }
}
