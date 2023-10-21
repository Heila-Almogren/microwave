import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {slideInAnimation} from "../../../route-animation";
import {ActivatedRoute, Router, RoutesRecognized} from "@angular/router";
import {filter, pairwise} from "rxjs";
import {ArticlesService} from "../../../services/Articles/articles.service";
import {HeaderMenuItem} from "../../../types/models/HeaderMenuItem";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [slideInAnimation]
})
export class HeaderComponent {}
