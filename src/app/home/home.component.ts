import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { Employment } from "../Employment";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  employments: Employment[];

  ngOnInit(): void {
    this.getEmployments();
  }

  getEmployments(): void {
    this.apiService.getResumeJson().subscribe((employments: Employment[]) => {
      this.employments = employments;
      // console.log(employments);
    });
  }

  getEmploymentsFromPlainTextFile(): void {
    this.apiService.getResume().subscribe((data: any) => {
      // console.log(data);
    });
  }
}
