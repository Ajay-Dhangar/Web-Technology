import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { jqxCalendarModule }   from 'jqwidgets-ng/jqxcalendar';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


