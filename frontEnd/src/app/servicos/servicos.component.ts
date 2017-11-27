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
    this.listar();
  }
  excluir(id){
    this.servicosService.deleta(id).subscribe(data => this.listar());
  }
  listar(){
    this.servicosService.listaTodos().subscribe(data=>{
      this.servicos = data;
    })
  }

}
