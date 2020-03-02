import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  private API_KEY = 'ts=9&apikey=097ccdcd61ba2e38426be4aeb141a04b&hash=b477fb0c7bae34aef66df5022bbc6a96';
  private URL = 'https://gateway.marvel.com:443'

  constructor(private http: HttpClient) { }

   getAllCharacters(){
      return this.http.get(this.URL+'/v1/public/characters?'+this.API_KEY)

   }
   getAllComics(){
    return this.http.get(this.URL+'/v1/public/comics?limit=30&'+this.API_KEY)

 }
  getComic(name){
  return this.http.get(this.URL+`/v1/public/comics?limit=30&?nameStartsWith=${name}&`+this.API_KEY)

}
   getCharacter(name: string){
    return this.http.get(this.URL+`/v1/public/characters?nameStartsWith=${name}&`+this.API_KEY)

 }
}
