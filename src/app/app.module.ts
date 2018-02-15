import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {MyAppServiceService} from "./my-app-service.service";
import { DisplayComponent } from './display/display.component';
import {RouterModule, Routes} from "@angular/router";

const appRoute: Routes =[
  {path:'', component: HomeComponent},
  {path:'display', component: DisplayComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [MyAppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
