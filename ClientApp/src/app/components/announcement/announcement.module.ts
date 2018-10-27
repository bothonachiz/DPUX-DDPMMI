import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatListModule
} from "@angular/material";

import { AnnouncementRoutingModule } from "./announcement-routing.module";
import { AnnouncementComponent } from "./announcement.component";
import { AnnouncementCreateComponent } from "./announcement-create/announcement-create.component";
import { AnnouncementListComponent } from "../announcement-list/announcement-list.component";

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    AnnouncementRoutingModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: "en-GB" }],
  declarations: [AnnouncementComponent, AnnouncementCreateComponent, AnnouncementListComponent]
})
export class AnnouncementModule {}
