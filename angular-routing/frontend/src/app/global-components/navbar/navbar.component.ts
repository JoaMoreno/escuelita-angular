import { Component, OnInit } from '@angular/core';
import {routes} from '../../app-routing.module';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  links=routes.slice(1);
  constructor() { }

  ngOnInit(): void {
    console.log(this.links[0].path);
  }
  
}
