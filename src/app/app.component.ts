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

  constructor(private http: HttpClient){
  }

  form;
  ngOnInIt(){
    this.form = new FormGroup({
      retailer: new FormControl(),
      elixir: new FormControl()    
   })
  }

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
    this.getCardData(this.elixir)
  }

  getCardData(elixir){
    this.cardList.forEach(function(card){
    if(card.elixirCost == elixir)
      console.log(card);
    });
  }
  onSubmit(){
    this.getCards()
    this.getCardData(this.elixir)
  }
}