import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { FavouriteComponent} from'../favourite/favourite.component';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors:String[];
  isActive=true;
  email="me@example.com";
  sampleSummary:string;
  callerIsSelected:boolean=true;

  constructor(service:AuthorService) {
    this.authors=service.getAuthors();
    this.sampleSummary="kjhfhds sdkjhfds dkjfsld lskdjfldj";
   }

  ngOnInit() {
  }
  public getEmail(emailValue){
    console.log('getEmail'+this.email);
  }

  callerFavSelected(){
    console.log('callerFavSelected');
  }

}
