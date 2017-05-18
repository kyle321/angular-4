import { BrowserModule} from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import  { NgModule} from '@angular/core'
import {RegisterComponent} from "./register.component";
import {RegisterRoutingModule} from "./register.routing";

@NgModule({
    declarations:[RegisterComponent],
    imports:[
        BrowserModule,
        FormsModule,
        RegisterRoutingModule
    ]
})
export class RegisterModule{}