import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';
import { registerModuleFactory } from '@angular/core/src/linker/ng_module_factory_loader';

export class Agenda{
  public _id: String;
  public id: String;
  public nome: String;
  public horario: String;
  public servico: String;
}

@Injectable()
export class AgendaService {

  constructor(private http: HttpClient) { }

  listaTodos(){
    return this.http.get(environment.urlApi + '/agenda');
  }
  envia(dados: Array<Agenda>){
    return this.http.post('http://localhost:3000/agenda', dados);
  }
  excluirAgenda(id){
    return this.http.delete('http://localhost:3000/agenda/' + id);
  }
  getAgenda(id){
    return this.http.get('http://localhost:3000/agenda/' + id);
  }
  atualizaAgenda(dados){
    return this.http.post('http://localhost:3000/editaAgenda', dados);
  }
}
