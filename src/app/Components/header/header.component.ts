import {Component, HostListener, OnInit} from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faBars = faBars;


  constructor() {
  }

  public MobileMode: boolean | undefined;


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

}
