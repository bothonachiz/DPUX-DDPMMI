import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnnouncementModule } from "./components/announcement/announcement.module";
import { RequestModule } from "./components/request/request.module";

const routes: Routes = [
  {
    path: "",
    redirectTo: "announcement",
    pathMatch: "full"
  },
  {
    path: "announcement",
    loadChildren: () => AnnouncementModule
  },
  {
    path: "request",
    loadChildren: () => RequestModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
