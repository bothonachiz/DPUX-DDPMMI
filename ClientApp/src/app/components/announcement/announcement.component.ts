import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-announcement",
  templateUrl: "./announcement.component.html",
  styleUrls: ["./announcement.component.css"]
})
export class AnnouncementComponent implements OnInit {

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

  ngOnInit() {
  }

}
