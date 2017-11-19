import { Component, OnInit } from '@angular/core';
import { AgendaService, Agenda } from './agenda.service';
import { ServicosService } from '../servicos/servicos.service';
import { forEach } from '@angular/router/src/utils/collection';
import { element } from 'protractor';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  agenda: any;
  servico: any;
  private model: Agenda = new Agenda();
  private arrayAgenda: Array<Agenda> = new Array<Agenda>();

  constructor(private agendaService: AgendaService, private servicoService: ServicosService) { }

  ngOnInit() {
    this.listar();

  }

  excluir(id) {
    this.agendaService.excluirAgenda(id).subscribe(data => this.listar());
  }
  listar() {
    this.servicoService.listaTodos().subscribe(data => {
      this.servico = data;
      this.agendaService.listaTodos().subscribe(data => {
        this.agenda = data;
      });
    });

  }
  filtraObj(id) {
    var retorno;
    this.servico.forEach(element => {
      if(id == element._id){
        retorno = element.nome;
      }
    });
    return retorno;

  }
  // mostraDados(data){
  //   this.model._id = data._id;
  //   this.model.id = data.id;
  //   this.model.horario = data.horario;
  //   this.model.nome = data.nome;
  //   this.model.servico = data.servico;
  //   // console.log(this.model);
  //   // this.model.forEach(element => {
  //   //   this.arrayAgenda.push(element);     
  //   // });

  // }

} 
