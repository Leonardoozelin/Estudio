import { Component, OnInit } from '@angular/core';
import { ContatoService, Contato } from '../contato/contato.service';

@Component({
  selector: 'app-cadastra-cliente',
  templateUrl: './cadastra-cliente.component.html',
  styleUrls: ['./cadastra-cliente.component.css']
})
export class CadastraClienteComponent implements OnInit {

  constructor(private contatoService: ContatoService) { }
  private model: Contato = new Contato();

  ngOnInit() {
    this.model.id = '4';

  } 
  onAdd(){
    this.contatoService.adiciona(this.model).subscribe(
      function(){
        alert("Cadastrado com sucesso");
      },
      function(error){
        console.log(error);
      }
    )
    this.limpaModel();
  }
  limpaModel(){
    this.model.nome = '';
    this.model.cidade = '';
    this.model.email = '';
    this.model.telefone = '';
    this.model.endereco = '';
    this.model.cpf = '';
    this.model.id = '4';
  }

}
