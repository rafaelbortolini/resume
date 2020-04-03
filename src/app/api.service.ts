import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Employment } from "./Employment";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  textPath = "./assets/resume.txt";
  jSONPath = "./assets/resume.json";
  getResume(): Observable<String> {
    return this.httpClient.get(this.textPath, { responseType: "text" });
  }

  getResumeJson(): Observable<Employment[]> {
    return this.httpClient.get<Employment[]>(this.jSONPath);
  }
}
