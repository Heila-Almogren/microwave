import {Component, HostListener, OnInit} from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {slideInAnimation} from "../../route-animation";
import {ActivatedRoute, Router, RoutesRecognized} from "@angular/router";
import {filter, pairwise} from "rxjs";
import {ArticlesService} from "../../Services/Articles/articles.service";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [slideInAnimation]
})
export class HeaderComponent implements OnInit {
  prev: string = "/mobileMenu";
  cur: string = "/";
  togo: string = "/side-menu";
  public MobileMode: boolean | undefined;
  faBars = faBars;
  searchterm: any;

  constructor(private articlesService: ArticlesService,
              private router: Router,
              private route: ActivatedRoute
  ) {

    this.router.events
      .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
      .subscribe((events: RoutesRecognized[]) => {

        this.prev = events[0].urlAfterRedirects;
        this.cur = events[1].urlAfterRedirects;
        // console.log("was in: " + this.prev + ", now in: " + this.cur);
        if (this.cur == "/side-menu") {
          this.togo = this.prev;
        } else {
          this.togo = "/side-menu"
        }

      });

  }


  @HostListener('window:resize', ['$event'])
  onResize() {
    this.MobileMode = this.setMobileMode();

  }

  ngOnInit(): void {
    this.MobileMode = this.setMobileMode();
  }

  setMobileMode() {
    return window.innerWidth <= 500;
  }

  search(){
    if(!this.searchterm || this.searchterm =="") return;
    this.router.navigate(['search'], {queryParams: {term: this.searchterm}});
  }

}
