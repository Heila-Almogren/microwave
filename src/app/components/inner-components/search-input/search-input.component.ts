import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {

  searchTerm: string = "";

  constructor(private router: Router) {}

  search() {
    if (this.searchTerm) {
      this.router.navigate(['search'], {queryParams: {term: this.searchTerm}});
    }
  }


}
