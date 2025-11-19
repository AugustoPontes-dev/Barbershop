import { Routes } from '@angular/router';
import { Reserva } from './pages/reserva/reserva';
import { Chat } from './pages/chat/chat';

export const routes: Routes = [
{path: '', component: Reserva},
{path: 'chat', component: Chat},
];
