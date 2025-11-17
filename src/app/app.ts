import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Calendario } from "./calendario/calendario";
import { FormularioReserva } from "./formulario-reserva/formulario-reserva";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Calendario, FormularioReserva],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Barbershop');
}
