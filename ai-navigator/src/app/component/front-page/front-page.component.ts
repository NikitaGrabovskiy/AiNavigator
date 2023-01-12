import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

mediaSelected:boolean = false;
operationSelected:boolean = false;




  constructor() { }

  ngOnInit(): void {

  }

  selectMedia (){
    this.mediaSelected = true;
  }

  selectOperation (){
    this.operationSelected = true;
  }

}
