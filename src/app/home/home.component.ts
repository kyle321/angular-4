import { Component, OnInit } from '@angular/core';
import {HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employee=[];
    empError=[];
  constructor(private _homeService:HomeService) { }

  ngOnInit() {
    this._homeService.getData().subscribe(response=>this.employee=response,
    errorMsg=>this.empError=errorMsg)
  }

}
