import { Component, OnInit,Input } from '@angular/core';
import { UrlCreationOptions } from '@angular/router';
import { ToolModel } from 'src/app/model/tool-model.model';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {

  @Input() description!:string;
  @Input() name!:string;

  constructor() {}
   
  ngOnInit(): void {
    
  }

}
