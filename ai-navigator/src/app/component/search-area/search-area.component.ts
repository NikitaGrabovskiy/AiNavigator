import { Component, OnInit,Input} from '@angular/core';
import { ToolModel } from 'src/app/model/ToolModel';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.css'],
})
export class SearchAreaComponent implements OnInit {

  @Input()tools!:ToolModel[];

  constructor() {}

  ngOnInit(): void {}

}
