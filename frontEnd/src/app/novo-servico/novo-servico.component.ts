import { Component, OnInit } from '@angular/core';
import { ServicosService, novoServicos } from '../servicos/servicos.service';

@Component({
  selector: 'app-novo-servico',
  templateUrl: './novo-servico.component.html',
  styleUrls: ['./novo-servico.component.css']
})
export class NovoServicoComponent implements OnInit {

  constructor(private servicosService: ServicosService) { }

  private model: novoServicos = new novoServicos();

  ngOnInit() {
  	this.model.id = '1';
  }
  onAdd(){
  	this.servicosService.adiciona(this.model).subscribe(
  		function () {
  			alert("Cadastrado Com Sucesso");
  		},
  		function (error){
  			console.log(error);
  		}
  		);
  	this.limpaForm();
  }
  limpaForm(){
  	this.model.nome = '';
  	this.model.descricao = '';
  	this.model.valor = null;
  	this.model.id = '1';
  }

}
