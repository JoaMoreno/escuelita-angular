import { Component } from '@angular/core';
import {routes} from './app-routing.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links=routes.slice(1);
  title = 'frontend';
}
