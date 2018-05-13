import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostServiceService } from '../../services/post-service.service';
import { post } from 'selenium-webdriver/http';
import { NotFoundError } from '../../common/errors/not-found-error';
import { AppError } from '../../common/errors/app-error';

@Component({
  selector: 'post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {
  posts :any[];
  

  constructor(private service:PostServiceService) {
    
    
  }

  createPost(newItem:HTMLInputElement){
    let newPost={title:newItem.value};
    this.service.createPosts(newPost)
    .subscribe(
      response=>
      {
      newPost['id']=response.json().id;
      this.posts.splice(0,0,newPost);
      },
      (error:AppError)=>
      {
        if(error instanceof NotFoundError)
          alert('Not found error');
        else
          alert('Unexpected error occured');
      //console.log(error);
      }
              );
    newItem.value='';

  }

  deletePost(post){
    let index=this.posts.indexOf(post);
    this.posts.splice(index,1);
  this.service.deletePost(post)
      .subscribe(response=>{
        
    },
    (error)=>
    {
     this.posts.splice(index,0,post);


    console.log(error);
    if(error instanceof NotFoundError)
      alert('Not found error in delete ');
    else
      throw error;//alert('Unexpected error occured ');
    });
   
  }

  ngOnInit(){
    this.service.getPosts().
    subscribe(
      (posts)=>{this.posts=posts;}
      // using map to replcae below 2 lines
      // response=>{
      // this.posts=response.json();


      // Handled globally
      // },
      // error=>
      // {
      // console.log(error);
      // 
      //}
    );

  }
}
