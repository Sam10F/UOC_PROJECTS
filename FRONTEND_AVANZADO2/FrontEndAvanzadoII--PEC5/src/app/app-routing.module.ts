import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { CardsComponent } from './components/cards/cards.component';

const routes: Routes = [
  { path: '', component: CardsComponent },
  { path: 'card/:id', component: CardComponent },
  { path: '**', component: CardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
