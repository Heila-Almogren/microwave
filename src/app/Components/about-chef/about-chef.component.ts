import {Component, OnInit} from '@angular/core';
import {ArticlesService} from "../../Services/Articles/articles.service";
import {ChefService} from "../../Services/Chef/chef.service";

@Component({
  selector: 'app-about-chef',
  templateUrl: './about-chef.component.html',
  styleUrls: ['./about-chef.component.css']
})
export class AboutChefComponent implements OnInit {
  summary: string | undefined;

  constructor(private chefService: ChefService) {
  }


  ngOnInit(): void {

    this
      .chefService
      .getSummary()
      .subscribe(res => {
          this.summary = res["data"]["aboutChef"]["data"]["attributes"]["summary"];
        }
      )
  }

}
