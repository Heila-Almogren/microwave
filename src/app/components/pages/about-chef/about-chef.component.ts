import {Component, OnInit} from '@angular/core';
import {ChefService} from "../../../services/Chef/chef.service";
import {ResponseState} from "../../../types/ResponseState";

@Component({
  selector: 'app-about-chef',
  templateUrl: './about-chef.component.html',
  styleUrls: ['./about-chef.component.css']
})
export class AboutChefComponent implements OnInit {

  readonly ResponseState = ResponseState


  summary: string | undefined;
  responseState: ResponseState = ResponseState.PENDING;

  constructor(private chefService: ChefService) {
  }


  ngOnInit(): void {
    this.loadSummary()
  }

  private loadSummary() {
    this
      .chefService
      .getSummary()
      .subscribe((summary: string) => {
          this.responseState = ResponseState.FULFILLED
          this.summary = summary;
        },
        () => {
          this.responseState = ResponseState.ERROR
        })
  }

}
