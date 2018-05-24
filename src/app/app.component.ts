import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  readonly cardURL = 'http://www.clashapi.xyz/api/cards'
  cardList: any;
  card: any;
  elixirCount = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  constructor(private http: HttpClient){
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
    }
    // getRequestedElixir(){

    // }
    // getCardData(){
    // this.cardList.forEach(function(value){
    //     console.log(value);
    //   }};

    afterSubmit(elixir){

    }
  title = 'app';
}
