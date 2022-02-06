import {Component, OnInit} from '@angular/core';
import {Environment} from "@angular/compiler-cli/src/ngtsc/typecheck/src/environment";
import {environment} from "../environments/environment";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {

    console.log("Production: "+environment.production)

  }


}
