import { Component ,OnInit } from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  constructor(private _emplo:AppService){}
employees=[];
  empError=[];
  ngOnInit(){
    this._emplo.getDate().subscribe(response=>this.employees=response,
        errormsg=>this.empError=errormsg
    );
  }
}
