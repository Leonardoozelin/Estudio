import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ContatoService {

  constructor(private http: HttpClient) { }
  listaTodos(){
    return this.http.get(environment.urlApi + '/contatos');
  }

}
