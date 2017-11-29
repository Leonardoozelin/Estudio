import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { ProdutosService } from './../produtos/produtos.service';
import { VendasService, venda } from './../vendas/vendas.service';
import { ContatoService } from './../contato/contato.service';


@Component({
  selector: 'app-edita-venda',
  templateUrl: './edita-venda.component.html',
  styleUrls: ['./edita-venda.component.css']
})
export class EditaVendaComponent implements OnInit {

  constructor(private contatoService: ContatoService, private produtoService: ProdutosService, private vendaService: VendasService, private route: ActivatedRoute) { }

  produto: any;
  contato: any;
  private model: venda = new venda();

  ngOnInit() {
  	this.contatoService.listaTodos().subscribe(data => {
      this.contato = data;
      this.produtoService.listaTodos().subscribe(data => {
        this.produto = data;
        this.route.params.subscribe((params: Params) => {
          var id = params['id'];
          this.getById(id);
        });
      });
    });
  }
  getById(id){
  	return this.vendaService.filtro(id).subscribe(data => this.listaDados(data));
  }
  listaDados(data){
  	this.model.cliente = data.cliente;
  	this.model.produto = data.produto
  	this.model._id = data._id;
  }
    onSend() {
    this.vendaService.atualiza(this.model).subscribe(
      function () {
        alert("Enviado com Sucesso");
      },
      function (erro) {
        console.log(erro);
      }
    );
  }
}
