import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { AppError } from '../common/errors/app-error';
import { NotFoundError } from '../common/errors/not-found-error';
import { BadRequestError } from '../common/errors/bad-req-error';


@Injectable()
export class PostServiceService {
  private url='http://jsonplaceholder.typicode.com/posts';

  constructor(private http:Http) { }

  getPosts(){
    return this.http.get(this.url)
    .map(response=>response.json())
    .catch((error:Response)=>{
      if(error.status==400)
        return Observable.throw(new BadRequestError(error));
      else
        return Observable.throw(new AppError(error));
  });
  }

  createPosts(newPost){
    return  this.http.post(this.url,JSON.stringify(newPost))
    .catch((error:Response)=>{
        if(error.status==400)
          return Observable.throw(new BadRequestError(error));
        else
          return Observable.throw(new AppError(error));
    });
  }

  deletePost(deletePost){
    return this.http.delete(this.url+'/'+
    3000//deletePost.id
    ,JSON.stringify(deletePost))
    .catch(
      this.handleError
      //removed below by using common handle
      /* (error:Response)=>{
      console.log(error);
        if(error.status===404)
          return Observable.throw(new NotFoundError(error));
        else
          return Observable.throw(new AppError(error));
      } */
    );
  }

  private handleError(error){
    if(error.status==400)
      return Observable.throw(new BadRequestError(error));
    if(error.status===404)
      return Observable.throw(new NotFoundError(error));
    else
      return Observable.throw(new AppError(error));
  }

}
