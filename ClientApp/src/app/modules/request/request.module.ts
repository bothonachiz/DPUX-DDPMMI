import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RequestRoutingModule } from "./request-routing.module";
import { RequestComponent } from "./request.component";
import { RequestCreateComponent } from "./request-create/request-create.component";
import { RequestApproveComponent } from "./request-approve/request-approve.component";

@NgModule({
  imports: [CommonModule, RequestRoutingModule],
  declarations: [
    RequestComponent,
    RequestCreateComponent,
    RequestApproveComponent
  ]
})
export class RequestModule {}
