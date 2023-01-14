import { AfterViewInit, Component, OnInit} from '@angular/core';
import { GetToolsService } from 'src/app/service/get-tools.service';
import { SelectMediaTypeComponent } from '../select-media-type/select-media-type.component';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {


mediaSelected:boolean = true;
operationSelected:boolean = false;
specificServicesSelected:boolean = false;
showResults:boolean = false;


 getToolsService:GetToolsService;

  constructor(getToolsService:GetToolsService) {
    this.getToolsService=getToolsService;
  }

  ngOnInit(): void {
  }

  updateValues(updated:boolean):void{
    console.log("valueUpdated !!!")
    this.mediaSelected = this.getToolsService.selectedMedia.length == 0;
    this.showResults = true;
  }
}
