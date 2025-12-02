import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-area-servicos',
  imports: [RouterLink],
  templateUrl: './area-servicos.html',
  styleUrl: './area-servicos.css',
})
export class AreaServicos implements OnInit {

  filtroAtivo: string = 'todos';

  constructor() { }

  ngOnInit(): void {
  }


  setFilter(filtro: string): void {

    this.filtroAtivo = filtro;
    console.log('Novo filtro:', this.filtroAtivo);
  }


  shouldShow(category: string): boolean {

    if (this.filtroAtivo === 'todos') {
      return true;
    }
    return category === this.filtroAtivo;
  }
}