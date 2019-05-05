export enum Suit {
  'Spades',
  'Hearts',
  'Diamonds',
  'Clubs',
} 

export enum List {
  'Reserve',
  'SuitesList1',
  'SuitesList2',
  'SuitesList3',
  'SuitesList4',
  'List1',
  'List2',
  'List3',
  'List4',
  'List5',
  'List6',
  'List7',
}

export class Card {
  id: string;
  number: number;
  suit: Suit;
  img: string;
  flipped: boolean;
  list: List;


}