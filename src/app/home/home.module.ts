import {BrowserModule} from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule} from'@angular/core'
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home.routing";

@NgModule(
    {
        declarations:[HomeComponent],
        imports:[
            BrowserModule,
            FormsModule,
            HomeRoutingModule
        ]
    }
)
export class HomeModule{}