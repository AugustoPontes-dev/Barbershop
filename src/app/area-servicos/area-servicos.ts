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

  // 1. Variável para armazenar o filtro ativo
  // Começamos com 'todos' para mostrar todos os cards inicialmente.
  filtroAtivo: string = 'todos';

  constructor() { }

  ngOnInit(): void {
    // Você pode colocar aqui qualquer inicialização necessária.
  }

  // 2. Função para mudar o filtro quando um botão é clicado
  setFilter(filtro: string): void {
    // Atualiza o filtro ativo para o valor do 'data-filter' clicado
    this.filtroAtivo = filtro;
    console.log('Novo filtro:', this.filtroAtivo);
  }

  // 3. Função para verificar se um card deve ser exibido
  shouldShow(category: string): boolean {
    // Se o filtro ativo for 'todos', mostre o card
    if (this.filtroAtivo === 'todos') {
      return true;
    }
    // Caso contrário, mostre o card apenas se a categoria dele corresponder ao filtro ativo
    return category === this.filtroAtivo;
  }
}