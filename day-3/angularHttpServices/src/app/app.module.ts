import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfDataComponent } from './list-of-data/list-of-data.component';

import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent} from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { Error404Component } from './error404/error404.component'

@NgModule({
  declarations: [
    AppComponent,
    ListOfDataComponent,
    NavbarComponent,
    HomePageComponent,
    RegisterComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'', component:HomePageComponent},
      {path:'list', component:ListOfDataComponent},
      {path:'register/:user', component:RegisterComponent},
      {path:'**', component:Error404Component},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
