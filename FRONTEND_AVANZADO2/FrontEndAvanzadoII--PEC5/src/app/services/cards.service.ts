import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/cards.interface';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) { }

  getAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/Hunter');
  }

  getCardById(id: String): Observable<Card> {
    return this.http.get<Card>('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/' + id);
  }

}
