import { Component, OnInit } from '@angular/core';
import { ProdutosService } from './../produtos/produtos.service';
import { VendasService, venda } from './../vendas/vendas.service';


@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {

	produto: any;
	venda: any;

  constructor(private vendasService: VendasService, private produtoService: ProdutosService) { }

  ngOnInit() {
  	this.listar();
  }
  listar(){
  	this.produtoService.listaTodos().subscribe(data =>{
		this.produto = data;
		this.vendasService.listaTodos().subscribe(data =>{
			this.venda = data;
		});
	});
  }
  excluir(id){
  	this.vendasService.excluir(id).subscribe(data => this.listar());
  }
  filtraObj(id){
  	var retorno;
  	this.produto.forEach(element => {
  		if (id == element._id){
  			retorno = element.nome;
  		}
  	});
  	return retorno;
  }

}
