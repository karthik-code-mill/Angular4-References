import { Injectable } from '@angular/core';
import { CommonDataServiceService } from "./common-data-service.service";
import { Http } from "@angular/http";

@Injectable()
export class GitFollowersService extends CommonDataServiceService{
    constructor(http:Http){
        super('https://api.github.com/users/mosh-hamedani/followers',http);
    }

}