import { Component, OnInit } from '@angular/core';

@Component({
  selector: '',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  makechange = true;
  change = false;

  constructor() { }

  ngOnInit() {
  }

  showit(){
    this.change = !this.change;
    this.makechange = !this.makechange;
  }

  ScrollToElement(ele){
    let element = document.getElementById(ele);
    element.scrollIntoView({behavior: "smooth"});
  }

}
