import { Routes } from '@angular/router';
import { Reserva } from './pages/reserva/reserva';
import { Chat } from './pages/chat/chat';

export const routes: Routes = [
{path: '1', component: Reserva},
{path: '', component: Chat},
];
