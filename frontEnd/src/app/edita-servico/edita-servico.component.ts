import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { ServicosService, novoServicos } from '../servicos/servicos.service';

@Component({
  selector: 'app-edita-servico',
  templateUrl: './edita-servico.component.html',
  styleUrls: ['./edita-servico.component.css']
})
export class EditaServicoComponent implements OnInit {

  constructor(private servicoService: ServicosService, private route: ActivatedRoute) { }

  private model: novoServicos = new novoServicos();

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      var id = params['id'];
      this.getId(id);
    });
  }
  getId(id) {
    this.servicoService.filtro(id).subscribe(data => this.listar(data))
  }
  listar(data) {
    this.model._id = data._id;
    this.model.id = data.id;
    this.model.nome = data.nome;
    this.model.descricao = data.descricao;
    this.model.valor = data.valor
  }
  onAdd() {
    this.servicoService.atualiza(this.model).subscribe(
      function () {
        alert("Atualizado com sucesso");
      },
      function (error) {
        console.log(error);
      }
    );
  }

}
