import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export class novoServicos{
	public _id: String;
	public id: String;
	public nome: String;
	public descricao: String;
	public valor: Number; 
}

@Injectable()
export class ServicosService {

  constructor(private http: HttpClient) { }
  listaTodos(){
    return this.http.get(environment.urlApi + '/servicos');
  }
  adiciona(dados){
  	return this.http.post('http://localhost:3000/servicos', dados);
  }
  deleta(id){
  	return this.http.delete('http://localhost:3000/servicos/' + id);
  }
  filtro(id){
  	return this.http.get('http://localhost:3000/servicos/' + id);
  }
  atualiza(dados){
  	return this.http.post('http://localhost:3000/editaServico', dados);
  }

}
