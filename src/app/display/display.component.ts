import { Component, OnInit } from '@angular/core';
import {MyAppServiceService} from "../my-app-service.service";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  constructor(private myService: MyAppServiceService) { }
   data
  ngOnInit() {
    this.select()
  }



  select(){

  }

}
