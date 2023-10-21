import {Component, HostListener, OnInit} from '@angular/core';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {HeaderMenuItem} from "../../../types/models/HeaderMenuItem";

@Component({
  selector: 'header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {


  headerMenuItems: HeaderMenuItem[] = [
    {
      route: "home",
      label: "الرئيسية"
    },
    {
      route: "articles",
      label: "جميع المقالات"
    },
    {
      route: "about-chef",
      label: "عن الشيف"
    },
  ]

  faBars = faBars;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateMenuVisibility()
  }

  ngOnInit(): void {
    this.updateMenuVisibility()
  }

  updateMenuVisibility() {
    this.MenuShown = window.innerWidth >= 500;
  }

  ToggleMenu() {
    this.MenuShown = !this.MenuShown;
  }


  MenuShown: boolean = true;

  constructor() {
  }

}
