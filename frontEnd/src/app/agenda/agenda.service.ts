import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';

export class Agenda{
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
  envia(dados: Agenda){
    console.log(dados);
    return this.http.post('http://http://localhost:3000/agenda', dados);

  }
}
