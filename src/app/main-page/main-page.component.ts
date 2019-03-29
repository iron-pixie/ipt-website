import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  falsey=false;

  constructor(private router:Router) { }

  ngOnInit() {
    
  }

  goToMember(){
    this.router.navigate(['/members']);
  }

}
