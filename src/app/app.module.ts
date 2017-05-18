import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppService} from "./app.service";
import {HomeService} from "./home/home.service";
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      RouterModule.forRoot([
        {
          path:'',
          component:NavigationComponent
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
