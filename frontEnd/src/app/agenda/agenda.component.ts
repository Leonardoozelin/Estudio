import { Component, OnInit } from '@angular/core';
import {AgendaService} from './agenda.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  agenda: any;

  constructor(private agendaService: AgendaService) { }

  ngOnInit() {
    this.listar();
  }

  excluir(id){
    this.agendaService.excluirAgenda(id).subscribe(data => this.listar());
  }
  listar(){
    this.agendaService.listaTodos().subscribe(data=>{
      this.agenda = data;
    })
  }

} 
