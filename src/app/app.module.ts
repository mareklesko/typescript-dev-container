import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GitListModule } from 'git-list';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GitListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
