import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  private box;
  private left = 10;
  private right = 10;

  private color = 'red'
  public misEstilos = {
    'background-color': this.color,
    'font-size': '20px',
    'font-weight': 'bold'
  }
  constructor() {

  }

  ngOnInit(): void {

  }

  Left() {
    let box = document.getElementById("box")
    for (let index = 0; index < 10; index++) {
      setInterval(()=>{
        this.left += 0.1
        box.style.left = this.left + 'px'
        console.log('done');
      }, 1)
      console.log(index);
    }
  }
  Right() {
    this.box = document.getElementById("box")
    this.left -= 10
    this.box.style.left = this.left + 'px'
  }
  // up() {
  //   this.box = document.getElementById("box")
  //   this.up += 10
  //   this.box.style.top = this.num + 'px'
  // }
  // down() {
  //   this.box = document.getElementById("box")
  //   this.down += 10
  //   this.box.style.bottom = this.num + 'px'
  // }

}
