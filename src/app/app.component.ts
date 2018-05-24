import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  readonly rootURL = 'http://www.clashapi.xyz/api/cards' 
  cardList: any;
  card: any;
  constructor(private http: HttpClient){
  }

  getCards(){
    let options = {
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':"*"
      })
    }
    this.http.get(this.rootURL).subscribe(card => {
      this.cardList = card;
      console.log(this.cardList);
    });
    // for (card in cardList)
    //   if(card.cardName == typedName)
    }
  title = 'app';
}
