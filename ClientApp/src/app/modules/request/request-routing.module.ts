import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RequestComponent } from "./request.component";
import { RequestApproveComponent } from "./request-approve/request-approve.component";
import { RequestCreateComponent } from "./request-create/request-create.component";

const routes: Routes = [
  {
    path: "",
    component: RequestComponent
  },
  {
    path: "create",
    component: RequestCreateComponent
  },
  {
    path: "approve",
    component: RequestApproveComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule { }
