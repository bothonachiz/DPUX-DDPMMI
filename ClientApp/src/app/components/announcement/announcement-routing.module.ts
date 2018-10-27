import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AnnouncementComponent } from "./announcement.component";
import { AnnouncementCreateComponent } from "./announcement-create/announcement-create.component";

const routes: Routes = [
  {
    path: "",
    component: AnnouncementComponent,
    data: { title: "Announcement" },
    children: [
      {
        path: "create",
        component: AnnouncementCreateComponent,
        data: { title: "Announcement - Create " }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnouncementRoutingModule {}
