import { CardService } from './../services/card.service';
import { Component, OnInit } from '@angular/core';
import { Card } from '../classes/card';
import { DragulaService } from 'ng2-dragula';
import { testUserAgent } from '@ionic/core';




@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private cardService: CardService,private dragulaService: DragulaService) {
    this.dragulaService.drag('bag')
    .subscribe(({ name, el, source }) => {
      console.log(name, el, source);
    });
 
    
    this.dragulaService.dropModel('bag')
      .subscribe(({ name }) => {
        console.log(name);
        console.log(this.list1);
        console.log(this.list2);
      });


    
    this.dragulaService.createGroup('bag', {
      revertOnSpill: true,
      copy: false,
      copySortSource: false,

      
      accepts: function (el, target, source, sibling) {

        console.log(el, 'el'); 
        const id = el.getElementsByTagName('app-card')[0].getAttribute('id');
        console.log(id, 'app-card');
        this.test();
        
        console.log(target, 'target');
        
        return false;

    },
    });


   }


   test(){
     console.log('test');

   }

  list1: Card[] = [];
  list2: Card[] = [];
  list3: Card[] = [];
  list4: Card[] = [];
  list5: Card[] = [];
  list6: Card[] = [];
  list7: Card[] = [];

  ngOnInit() {
    

  }



  distribute(){
    this.cardService.distribute();
    this.list1 = this.cardService.list1;
    this.list2 = this.cardService.list2;
    this.list3 = this.cardService.list3;
    this.list4 = this.cardService.list4;
    this.list5 = this.cardService.list5;
    this.list6 = this.cardService.list6;
    this.list7 = this.cardService.list7;

    console.log(this.list1, this.list2, this.list3, this.list4, this.list5, this.list6, this.list7, this.cardService.reserved)

  }

}
