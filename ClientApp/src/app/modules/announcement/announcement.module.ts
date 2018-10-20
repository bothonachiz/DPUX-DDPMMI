import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AnnouncementRoutingModule } from "./announcement-routing.module";
import { AnnouncementComponent } from "./announcement.component";
import { AnnouncementCreateComponent } from "./announcement-create/announcement-create.component";

@NgModule({
  imports: [
    CommonModule,
    AnnouncementRoutingModule
  ],
  declarations: [AnnouncementComponent, AnnouncementCreateComponent]
})
export class AnnouncementModule {}
