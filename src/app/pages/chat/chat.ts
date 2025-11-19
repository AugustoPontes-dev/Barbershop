import { Component } from '@angular/core';
import { Header } from "../../header/header";
import { Contato } from "../../contato/contato";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [Header, Contato],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {

}
