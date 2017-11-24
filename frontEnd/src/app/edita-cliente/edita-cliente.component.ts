import { Component, OnInit } from '@angular/core';
import { ContatoService, Contato } from './../contato/contato.service';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edita-cliente',
  templateUrl: './edita-cliente.component.html',
  styleUrls: ['./edita-cliente.component.css']
})
export class EditaClienteComponent implements OnInit {

  constructor(private contatoService: ContatoService, private route: ActivatedRoute) { }

  contato: any;
  model: Contato = new Contato();

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      var id = params['id'];
      this.getById(id);
    });
  } 
  getById(id){
    this.contatoService.filtra(id).subscribe(data => this.listaDados(data));
  }
  listaDados(data){
    this.model._id = data._id;
    this.model.id = data.id;
    this.model.nome = data.nome;
    this.model.cidade = data.cidade;
    this.model.email = data.email;
    this.model.telefone = data.telefone;
    this.model.endereco = data.endereco;
    this.model.cpf = data.cpf;
    }
    atualiza(){
      this.contatoService.atualizaDados(this.model).subscribe(
        function () {
          alert("Atualizado Com Sucesso");
        },
        function (error){
          console.log(error);
        }
      );
    }

}
