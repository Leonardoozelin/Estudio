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
  private arrayModel: Array<Agenda> = new Array<Agenda>();
  private valorTotal = 0.0;
  private valorUnitario = 0;
  private filtro: any;

  constructor(private contatoService: ContatoService, private servicoService: ServicosService, private agendaService: AgendaService) { }

  ngOnInit() {
    this.contatoService.listaTodos().subscribe(data => {
      this.contatos = data;
    }),
      this.servicoService.listaTodos().subscribe(data => {
        this.servicos = data;
      })
    this.model.id = '1';
  }
  onSubmit() {

  }
  onAdd() {
    this.arrayModel.push(this.model);
    this.filtro = this.filtraObbj(this.model.servico);
    this.somaTudo();
    this.model = new Agenda();
    this.resetForm();
  }
  onSend() {
    this.agendaService.envia(this.arrayModel).subscribe(
      function () {

      },
      function (erro) {
        console.log(erro);
      }
    );
    this.resetTudo();
  }
  resetForm() {
    this.model.horario = '';
    this.model.nome = '';
    this.model.servico = '';
    this.model.id = '1';
  }
  resetTudo(){
    this.model.horario = '';
    this.model.nome = '';
    this.model.servico = '';
    this.model.id = '1';
    this.valorTotal = 0;
    this.arrayModel = new Array<Agenda>();
  }
  somaTudo() {

    this.valorTotal += this.filtro.valor;
  }
  filtraObbj(id) {
    var retorno: any;

    this.servicos.forEach(element => {
      if (element._id == id) {
        retorno = element;
      }
    })
    return retorno;
  }
}
