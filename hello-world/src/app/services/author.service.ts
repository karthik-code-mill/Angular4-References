import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {
  private authors:String[];
  constructor() { 
    this.authors=["author1","author2","author3"];
  }
  public getAuthors(){
    return this.authors;
  }

}
