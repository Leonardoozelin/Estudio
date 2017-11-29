import { Component, OnInit } from '@angular/core';
import { ContatoService } from './../contato/contato.service';
import { ProdutosService } from './../produtos/produtos.service';
import { VendasService, venda } from './../vendas/vendas.service';

@Component({
  selector: 'app-nova-venda',
  templateUrl: './nova-venda.component.html',
  styleUrls: ['./nova-venda.component.css']
})
export class NovaVendaComponent implements OnInit {

	contato: any;
	produto: any;
	private model: venda = new venda();
	private arrayModel: Array<venda> = new Array<venda>();
	private valorTotal = 0.0;
	private valorUnitario = 0.0;
	private filtro: any;

  constructor(private contatoService: ContatoService, private produtosService: ProdutosService, private vendasService: VendasService ) { }

  ngOnInit() {
  	this.contatoService.listaTodos().subscribe(data => {
  		this.contato = data;
  	}),
  	this.produtosService.listaTodos().subscribe(data => {
  		this.produto = data;
  	})

  }
  onAdd(){
  	this.arrayModel.push(this.model);
  	this.filtro = this.filtraObbj(this.model.produto);
  	this.model.valor = this.valorUnitario;
  	this.somaTudo();
  	this.model = new venda();
  	this.resetForm();
  }
  onSend(){
  	this.vendasService.envia(this.arrayModel).subscribe(
  			function(){
  				alert("Cadastrado com Sucesso");
  			},
  			function(err){
  				console.log(err);
  			}
  		);
  	this.resetTudo();
  }
 	filtraObbj(id) {
    var retorno: any;

    this.produto.forEach(element => {
      if (element._id == id) {
        retorno = element;
      }
    })
    this.valorUnitario = retorno.valor;
    return retorno;
  }
  somaTudo(){
  	this.valorTotal += this.filtro.valor;
  }
  resetForm(){
  	this.model.cliente = '';
  	this.model.produto = '';
  }
  resetTudo(){
  	this.model.cliente = '';
  	this.model.produto = '';
  	this.valorTotal = 0;
  	this.arrayModel = new Array<venda>();
  }
}
