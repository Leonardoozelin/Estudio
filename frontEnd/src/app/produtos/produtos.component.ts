import { Component, OnInit } from '@angular/core';
import {ProdutosService} from './produtos.service'

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: any;
  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtosService.listaTodos().subscribe(data=>{
      this.produtos = data;
    })
  }

}
