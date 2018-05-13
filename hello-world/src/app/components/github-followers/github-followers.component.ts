import { Component, OnInit } from '@angular/core';
import { GitFollowersService } from '../../services/git-followers-service';
import { BadRequestError } from '../../common/errors/bad-req-error';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers:any[];
  constructor(private service:GitFollowersService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe(
      (followers)=>{
        this.followers=followers;
        console.log(followers);
      }
      ,
      error=>{
        if(error instanceof BadRequestError)
          alert('Invalid request error occured');
        else{
          throw error;
        }        
      }
    );

  }

}
