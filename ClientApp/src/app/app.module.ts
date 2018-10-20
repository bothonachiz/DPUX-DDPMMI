import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnnouncementListComponent } from './components/announcement-list/announcement-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
