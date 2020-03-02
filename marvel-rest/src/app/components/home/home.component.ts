import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';

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
     this.marvelService.getAllComics()
     .subscribe(
       res => {
         console.log(res.data.results);
         this.crudo = res.data.results;
         this.Characters = this.crudo.filter(element => element.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available")
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
  }

}
