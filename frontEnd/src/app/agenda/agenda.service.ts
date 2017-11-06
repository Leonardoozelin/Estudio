import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AgendaService {

  constructor(private http: HttpClient) { }

  listaTodos(){
    return this.http.get(environment.urlApi + '/agenda');
  }
  envia(dados){
    console.log(dados);
    
    return this.http.post(environment.urlApi + '/agenda', dados);

  }
}
