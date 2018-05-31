import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ElixirList } from './elixir-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly cardURL = 'http://www.clashapi.xyz/api/cards'
  cardList: any;
  card: any;
  elixirCount = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  elixir: any;
  form;
  elixirCardList = [];

  constructor(private http: HttpClient){  
    this.form = new FormGroup({
    elixirValue: new FormControl()    
    })
  }
  ngOnInit(){
    this.getCards()
  }

  // This function gets all the cards from the clash royale url page
  getCards(){
    let options = {
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':"*"
      })
    }
    this.http.get(this.cardURL).subscribe(card => {
      this.cardList = card;
      console.log(this.cardList);
    });
  }

  // // This function gets all the card data we need and push it to a new array
  populateCardData(elixir){
    this.elixirCardList = new Array<ElixirList>();
    this.cardList.forEach(card=>{
      if(card.elixirCost == elixir){
        let cardList = new ElixirList;
        cardList.card_name = card.card_name;
        cardList.card_rarity = card.card_rarity;
        cardList.card_type = card.card_type;
        cardList.card_description = card.card_description;

        this.elixirCardList.push(card);
        }
    });
  }

  // this function calls the getCardData function for when someone submits from the form
  onSubmit(){
    this.populateCardData(this.form.value.elixirValue);
  }
}