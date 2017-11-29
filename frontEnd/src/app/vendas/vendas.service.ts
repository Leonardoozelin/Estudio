import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';
import { registerModuleFactory } from '@angular/core/src/linker/ng_module_factory_loader';

export class venda{
	public _id: String;
	public cliente: String;
	public produto: String;
	public valor: Number;
}

@Injectable()
export class VendasService {

  constructor(private http: HttpClient) { }
  listaTodos(){
    return this.http.get(environment.urlApi + '/vendas');
  }
  envia(dados: Array<venda>){
    return this.http.post('http://localhost:3000/vendas', dados);
  }
  excluir(id){
    return this.http.delete('http://localhost:3000/vendas/' + id);
  }
  filtro(id){
    return this.http.get('http://localhost:3000/vendas/' + id);
  }
  atualiza(dados){
    return this.http.post('http://localhost:3000/editaVenda', dados);
  }

}
 