export enum Suit {
  'spades',
  'hearts',
  'diamonds',
  'clubs',
} 

export enum List {
  'none',
  'reserve',
  'suitesList1',
  'suitesList2',
  'suitesList3',
  'suitesList4',
  'list1',
  'list2',
  'list3',
  'list4',
  'list5',
  'list6',
  'list7',
}

export class Card {
  id: string;
  cardNumber: number;
  suit: Suit;
  img: string;
  flipped: boolean;
  list: List;

}