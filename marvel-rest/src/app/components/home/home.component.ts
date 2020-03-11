import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';
import { interval, timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private Characters;
  private crudo;

  constructor(private marvelService: MarvelService) { }

  async ngOnInit() {
    // if(localStorage.getItem('data')){
    //   this.Characters = localStorage.getItem('data')
    //   console.log(localStorage.getItem('data'));
    // }else{

     let data = this.marvelService.getNComics(50) 
     data.subscribe(
      res => {
        this.crudo = res.data.results;
        
        this.Characters = this.crudo.filter(element => element.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available")
       console.log(this.Characters);
        //  localStorage.setItem('data', this.Characters)
      },
      err => console.log(err)
    )
     
    // this.marvelService.getCharacter("iron")
    //   .subscribe(
    //     res => {
    //       console.log(res.data.results);
    //       this.Characters = res.data.results;
    //     },
    //     err => console.log(err)
    //   )
    //console.log(this.Characters);
  }}
