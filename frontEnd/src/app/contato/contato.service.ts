import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export class Contato{
  public _id: String;
  public id: String;
  public nome: String;
  public cpf: String;
  public telefone: String;
  public cidade: String;
  public endereco: String;
  public email: String;
}

@Injectable()
export class ContatoService {

  constructor(private http: HttpClient) { }
  listaTodos(){
    return this.http.get(environment.urlApi + '/contatos');
  }
  adiciona(dados){
    return this.http.post('http://localhost:3000/contatos', dados);
  }
  remove(dados){
    return this.http.delete('http://localhost:3000/contatos/' + dados);
  }
  filtra(id){
    return this.http.get('http://localhost:3000/contatos/' + id);
  }
  atualizaDados(){
    
  }

}
 