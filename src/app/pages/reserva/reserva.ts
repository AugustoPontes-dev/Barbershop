import { Component } from '@angular/core';
import { Header } from "../../header/header";
import { Calendario } from "../../calendario/calendario";
import { Reservas } from "../../reservas/reservas";
import { FormularioReserva } from "../../formulario-reserva/formulario-reserva";

@Component({
  selector: 'app-reserva',
  imports: [Header, Calendario, Reservas, FormularioReserva],
  templateUrl: './reserva.html',
  styleUrl: './reserva.css',
})
export class Reserva {

}
