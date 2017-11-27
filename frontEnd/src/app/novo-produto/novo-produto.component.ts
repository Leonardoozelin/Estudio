import { Component, OnInit } from '@angular/core';
import { ProdutosService, prod } from '../produtos/produtos.service';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {

  constructor(private servico: ProdutosService) { }

  private model: prod = new prod();

  ngOnInit() {
    this.model.id = '3';
  }
  onAdd() {
    console.log(this.model)
    this.servico.adiciona(this.model).subscribe(
      function(){
        alert("Cadastrado Com Sucesso");
      },
      function(error){
        console.log(error);
      }
    );
    this.limpaForm();
  }
  limpaForm() {
    this.model.nome = '';
    this.model.descricao = '';
    this.model.valor = null;
    this.model.id = '1';
  }


}
