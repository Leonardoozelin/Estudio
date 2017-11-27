import { Component, OnInit } from '@angular/core';
import { ProdutosService, prod } from '../produtos/produtos.service';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edita-produtos',
  templateUrl: './edita-produtos.component.html',
  styleUrls: ['./edita-produtos.component.css']
})
export class EditaProdutosComponent implements OnInit {
  
  constructor(private produto: ProdutosService, private route: ActivatedRoute) { }

  private model: prod = new prod();

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{
      var id = params['id'];
      this.getByid(id);
    })
  }
  getByid(id){
    this.produto.filtro(id).subscribe(data => this.listar(data));
  }
  listar(data){
    this.model._id = data._id;
    this.model.id = data.id;
    this.model.nome = data.nome;
    this.model.descricao = data.descricao;
    this.model.valor = data.valor;
  }
  onAdd(){
    this.produto.atualiza(this.model).subscribe(
      function(){
        alert("Atualizado Com Sucesso");
      },
      function(error){
        console.log(error);
      }
    );
  }
  

}
