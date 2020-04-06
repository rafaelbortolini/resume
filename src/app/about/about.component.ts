import { Component, OnInit } from "@angular/core";

export interface Note {
  name: string;
  link: string;
  icon: string;
}

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor() {}

  notes: Note[] = [
    { name: "Angular 9", link: "https://angular.io/", icon: "code" },
    {
      name: "Angular Flex-Layout",
      link: "https://www.npmjs.com/package/@angular/flex-layout",
      icon: "4k",
    },
    {
      name: "Angular Material",
      link: "https://material.angular.io/",
      icon: "face",
    },
    {
      name: "Angular Chartist",
      link: "https://www.npmjs.com/package/ng-chartist",
      icon: "bar_chart",
    },
  ];

  ngOnInit(): void {}
}
