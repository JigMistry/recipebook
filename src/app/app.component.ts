import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  loadedFeature = 'recipe';
  
  ngOnInit(){
    firebase.initializeApp({
        apiKey: "AIzaSyDLrbP-H3o4xIVI5D7AlXZuBcMEDTOHNY8",
        authDomain: "recipe-book-6bcb4.firebaseapp.com"
    });
  }
  
}
