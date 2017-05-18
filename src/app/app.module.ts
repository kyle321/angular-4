import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {AppService} from "./app.service";
import {HomeService} from "./home/home.service";
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HomeComponent} from "./home/home.component";
import {HomeModule} from "./home/home.module";
import {RegisterModule} from "./register/register.module";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
      HomeModule,
      RegisterModule,
      RouterModule.forRoot([
        {
          path:'',
          component:HomeComponent
        },
        {
          path:'**',
          component:NotFoundComponent
        }
      ])
  ],
  providers: [AppService,HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
