import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export class prod{
  public _id: String;
  public id: String;
  public nome: String;
  public descricao: String;
  public valor: Number;
}

@Injectable()
export class ProdutosService {

  constructor(private http: HttpClient) { }
  listaTodos(){
    return this.http.get(environment.urlApi + '/produto');
  }
  adiciona(dados){
  	return this.http.post('http://localhost:3000/produto', dados);
  }
  deleta(id){
  	return this.http.delete('http://localhost:3000/produto/' + id);
  }
  filtro(id){
  	return this.http.get('http://localhost:3000/produto/' + id);
  }
  atualiza(dados){
  	return this.http.post('http://localhost:3000/editaProduto', dados);
  }
}
