import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/cards.interface'
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: Card[] = [];

  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
    this.cardsService
      .getAllCards()
      .subscribe((cards) => {
        this.cards = cards.filter(card => card.img);
      });
  }

}
