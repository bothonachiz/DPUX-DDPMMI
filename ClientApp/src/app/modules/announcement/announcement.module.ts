import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material";

import { AnnouncementRoutingModule } from "./announcement-routing.module";
import { AnnouncementComponent } from "./announcement.component";
import { AnnouncementCreateComponent } from "./announcement-create/announcement-create.component";

@NgModule({
  imports: [CommonModule, MatToolbarModule, AnnouncementRoutingModule],
  declarations: [AnnouncementComponent, AnnouncementCreateComponent]
})
export class AnnouncementModule {}
