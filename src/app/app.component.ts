import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  // This function gets all the card data we need and push it to a new array
  getCardData(elixir){
    this.cardList.forEach(card=>{
      if(card.elixirCost == elixir){
        this.elixirCardList.push(card.name);
        this.elixirCardList.push(card.rarity);
        this.elixirCardList.push(card.type);
        this.elixirCardList.push(card.description);
        console.log(this.elixirCardList);
      }
    });
  }

  // this function calls the getCardData function for when someone submits from the form
  onSubmit(){
    this.getCardData(this.form.value.elixirValue);
  }
}