import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-request",
  templateUrl: "./request.component.html",
  styleUrls: ["./request.component.css"]
})
export class RequestComponent implements OnInit {
  titleLabel: any = "Request";
  constructor(route: ActivatedRoute) {
    route.url.subscribe(() => {
      if (route.snapshot.firstChild !== null) {
        this.titleLabel = route.snapshot.firstChild.data.title;
      } else {
        this.titleLabel = route.snapshot.data.title;
      }
    });
  }

  ngOnInit() {}
}
