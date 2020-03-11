import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-lateralbar',
  templateUrl: './lateralbar.component.html',
  styleUrls: ['./lateralbar.component.css']
})
export class LateralbarComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    
  }

  @HostBinding('class.is-open')
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
