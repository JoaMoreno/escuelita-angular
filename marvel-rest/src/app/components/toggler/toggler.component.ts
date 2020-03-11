import { Component, OnInit, Input, HostListener } from '@angular/core';
import { LateralbarComponent } from '../lateralbar/lateralbar.component';

@Component({
  selector: 'app-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.css']
})
export class TogglerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() sideBar: LateralbarComponent; 
   @HostListener('click')
  click() {
    this.sideBar.toggle();
  }

}
