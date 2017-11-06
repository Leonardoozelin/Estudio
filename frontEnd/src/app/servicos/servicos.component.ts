import { Component, OnInit } from '@angular/core';
import { ServicosService } from './servicos.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  servicos: any;

  constructor(private servicosService: ServicosService) { }

  ngOnInit() {
    this.servicosService.listaTodos().subscribe(data=>{
      this.servicos = data;
    })
  }

}
