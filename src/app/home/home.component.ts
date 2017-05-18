import { Component, OnInit } from '@angular/core';
import {HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  myName="Mike";
  onSubmit(value:any) {
    console.log(value)

  }
  //employee=[];
  //  empError=[];
  //constructor(private _homeService:HomeService) { }
  //
  //ngOnInit() {
  //  //this._homeService.getData().subscribe(response=>this.employee=response,
  //  //errorMsg=>this.empError=errorMsg)
  //}

}
