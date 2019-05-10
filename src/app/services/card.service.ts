import { Injectable } from '@angular/core';
import { Card, Suit, List } from '../classes/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  reserved: Card[] = [];
  listSuit1: Card[] = [];
  listSuit2: Card[] = [];
  listSuit3: Card[] = [];
  listSuit4: Card[] = [];
  list1: Card[] = [];
  list2: Card[] = [];
  list3: Card[] = [];
  list4: Card[] = [];
  list5: Card[] = [];
  list6: Card[] = [];
  list7: Card[] = [];

  reestartList(){
    this.reserved = [];
    this.listSuit1 = [];
    this.listSuit2 = [];
    this.listSuit3 = [];
    this.listSuit4 = [];
    this.list1 = [];
    this.list2 = [];
    this.list3 = [];
    this.list4 = [];
    this.list5 = [];
    this.list6 = [];
    this.list7 = [];
  }


  distribute() {
    this.reestartList();
    const newCards = [...this.getCards()];
    while (newCards.length  > 0) {
      const index  = Math.floor(Math.random() * newCards.length);
      
      if (this.list1.length < 1) {
        const card = newCards[index];
        card.flipped = true;
        this.list1.push(card);
        newCards.splice(index, 1);
        continue;
      }
      if (this.list2.length < 2) {
        const card = newCards[index];
        this.list2.push(card);
        newCards.splice(index, 1);
        if (this.list2.length === 2) {
          card.flipped = true;
        }
        continue;
      }
      if (this.list3.length < 3) {
        const card = newCards[index];
        this.list3.push(card);
        newCards.splice(index, 1);
        if (this.list3.length === 3) {
          card.flipped = true;
        }
        continue;
      }
      if (this.list4.length < 4) {
        const card = newCards[index];
        this.list4.push(card);
        newCards.splice(index, 1);
        if (this.list4.length === 4) {
          card.flipped = true;
        }
        continue;
      }
      if (this.list5.length < 5) {
        const card = newCards[index];
        this.list5.push(card);
        newCards.splice(index, 1);
        if (this.list5.length === 5) {
          card.flipped = true;
        }
        continue;
      }
      if (this.list6.length < 6) {
        const card = newCards[index];
        this.list6.push(card);
        newCards.splice(index, 1);
        if (this.list6.length === 6) {
          card.flipped = true;
        }
        continue;
      }
      if (this.list7.length < 7) {
        const card = newCards[index];
        this.list7.push(card);
        newCards.splice(index, 1);
        if (this.list7.length === 7) {
          card.flipped = true;
        }
        continue;
      } else {
        const card = newCards[index];
        this.reserved.push(card);
        newCards.splice(index, 1);
      }
    }
    this.listSuit1 = [];
    this.listSuit2 = [];
    this.listSuit3 = [];
    this.listSuit4 = [];
  }

  


  private getCards() {
    return [
      {
        id: 'AS',
        cardNumber: 1,
        suit: Suit.spades,
        img: './assets/img/AS.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: 'AH',
        cardNumber: 1,
        suit: Suit.hearts,
        img: './assets/img/AH.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: 'AD',
        cardNumber: 1,
        suit: Suit.diamonds,
        img: './assets/img/AD.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: 'AC',
        cardNumber: 1,
        suit: Suit.clubs,
        img: './assets/img/AC.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '2S',
        cardNumber: 2,
        suit: Suit.spades,
        img: './assets/img/2S.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '2H',
        cardNumber: 2,
        suit: Suit.hearts,
        img: './assets/img/2H.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '2D',
        cardNumber: 2,
        suit: Suit.diamonds,
        img: './assets/img/2D.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '2C',
        cardNumber: 2,
        suit: Suit.clubs,
        img: './assets/img/2C.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '3S',
        cardNumber: 3,
        suit: Suit.spades,
        img: './assets/img/3S.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '3H',
        cardNumber: 3,
        suit: Suit.hearts,
        img: './assets/img/3H.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '3D',
        cardNumber: 3,
        suit: Suit.diamonds,
        img: './assets/img/3D.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '3C',
        cardNumber: 3,
        suit: Suit.clubs,
        img: './assets/img/3C.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '4S',
        cardNumber: 4,
        suit: Suit.spades,
        img: './assets/img/4S.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '4H',
        cardNumber: 4,
        suit: Suit.hearts,
        img: './assets/img/4H.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '4D',
        cardNumber: 4,
        suit: Suit.diamonds,
        img: './assets/img/4D.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '4C',
        cardNumber: 4,
        suit: Suit.clubs,
        img: './assets/img/4C.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '5S',
        cardNumber: 5,
        suit: Suit.spades,
        img: './assets/img/5S.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '5H',
        cardNumber: 5,
        suit: Suit.hearts,
        img: './assets/img/5H.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '5D',
        cardNumber: 5,
        suit: Suit.diamonds,
        img: './assets/img/5D.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '5C',
        cardNumber: 5,
        suit: Suit.clubs,
        img: './assets/img/5C.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '6S',
        cardNumber: 6,
        suit: Suit.spades,
        img: './assets/img/6S.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '6H',
        cardNumber: 6,
        suit: Suit.hearts,
        img: './assets/img/6H.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '6D',
        cardNumber: 6,
        suit: Suit.diamonds,
        img: './assets/img/6D.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '6C',
        cardNumber: 6,
        suit: Suit.clubs,
        img: './assets/img/6C.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '7S',
        cardNumber: 7,
        suit: Suit.spades,
        img: './assets/img/7S.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '7H',
        cardNumber: 7,
        suit: Suit.hearts,
        img: './assets/img/7H.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '7D',
        cardNumber: 7,
        suit: Suit.diamonds,
        img: './assets/img/7D.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '7C',
        cardNumber: 7,
        suit: Suit.clubs,
        img: './assets/img/7C.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '8S',
        cardNumber: 8,
        suit: Suit.spades,
        img: './assets/img/8S.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '8H',
        cardNumber: 8,
        suit: Suit.hearts,
        img: './assets/img/8H.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '8D',
        cardNumber: 8,
        suit: Suit.diamonds,
        img: './assets/img/8D.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '8C',
        cardNumber: 8,
        suit: Suit.clubs,
        img: './assets/img/8C.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '9S',
        cardNumber: 9,
        suit: Suit.spades,
        img: './assets/img/9S.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '9H',
        cardNumber: 9,
        suit: Suit.hearts,
        img: './assets/img/9H.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '9D',
        cardNumber: 9,
        suit: Suit.diamonds,
        img: './assets/img/9D.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '9C',
        cardNumber: 9,
        suit: Suit.clubs,
        img: './assets/img/9C.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '10S',
        cardNumber: 10,
        suit: Suit.spades,
        img: './assets/img/10S.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '10H',
        cardNumber: 10,
        suit: Suit.hearts,
        img: './assets/img/10H.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '10D',
        cardNumber: 10,
        suit: Suit.diamonds,
        img: './assets/img/10D.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: '10C',
        cardNumber: 10,
        suit: Suit.clubs,
        img: './assets/img/10C.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: 'JS',
        cardNumber: 11,
        suit: Suit.spades,
        img: './assets/img/JS.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: 'JH',
        cardNumber: 11,
        suit: Suit.hearts,
        img: './assets/img/JH.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: 'JD',
        cardNumber: 11,
        suit: Suit.diamonds,
        img: './assets/img/JD.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: 'JC',
        cardNumber: 11,
        suit: Suit.clubs,
        img: './assets/img/JC.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: 'QS',
        cardNumber: 12,
        suit: Suit.spades,
        img: './assets/img/QS.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: 'QH',
        cardNumber: 12,
        suit: Suit.hearts,
        img: './assets/img/QH.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: 'QD',
        cardNumber: 12,
        suit: Suit.diamonds,
        img: './assets/img/QD.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: 'QC',
        cardNumber: 12,
        suit: Suit.clubs,
        img: './assets/img/QC.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: 'KS',
        cardNumber: 13,
        suit: Suit.spades,
        img: './assets/img/KS.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: 'KH',
        cardNumber: 13,
        suit: Suit.hearts,
        img: './assets/img/KH.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: 'KD',
        cardNumber: 13,
        suit: Suit.diamonds,
        img: './assets/img/KD.jpg',
        flipped: false,
        list: List.none,
      },
      {
        id: 'KC',
        cardNumber: 13,
        suit: Suit.clubs,
        img: './assets/img/KC.jpg',
        flipped: false,
        list: List.none,
      },
    ]
  }

  getCardById(id: string): Card{
    return this.getCards().find(card => card.id === id);
  }
}
