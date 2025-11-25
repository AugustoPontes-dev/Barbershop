import { Component } from '@angular/core';
import { CardServico } from '../../card-servico/card-servico';
import { AreaServicos } from "../../area-servicos/area-servicos";

@Component({
  selector: 'app-servico',
  standalone: true,
  imports: [CardServico, AreaServicos],
  templateUrl: './servico.html',
  styleUrl: './servico.css',
})
export class Servico {

}
