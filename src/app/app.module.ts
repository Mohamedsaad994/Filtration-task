import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { OurWorkComponent } from './Components/our-work/our-work.component';
import { AboutComponent } from './Components/about/about.component';
import { RecipesComponent } from './Components/recipes/recipes.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { TestymonialsComponent } from './Components/testymonials/testymonials.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    OurWorkComponent,
    AboutComponent,
    RecipesComponent,
    ContactComponent,
    HttpClientModule,
    TestymonialsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
