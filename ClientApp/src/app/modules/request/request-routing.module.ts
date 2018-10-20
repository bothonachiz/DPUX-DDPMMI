import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RequestComponent } from "./request.component";
import { RequestApproveComponent } from "./request-approve/request-approve.component";
import { RequestCreateComponent } from "./request-create/request-create.component";

const routes: Routes = [
  {
    path: "",
    component: RequestComponent,
    data: { title: "Request" },
    children: [
      {
        path: "create",
        component: RequestCreateComponent,
        data: { title: "Request - Create " }
      },
      {
        path: "approve",
        component: RequestApproveComponent,
        data: { title: "Request - Approve" }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule {}
