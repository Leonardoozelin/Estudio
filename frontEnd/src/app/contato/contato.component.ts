import { Component, OnInit } from '@angular/core';
import { ContatoService } from './contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  contato: any;

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    this.contatoService.listaTodos().subscribe(data=>{
      this.contato = data;
    })
  }

}
