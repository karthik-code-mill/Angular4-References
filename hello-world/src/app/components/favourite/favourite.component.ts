import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  @Input() isSelected:boolean;
  @Output() change=new EventEmitter; 
  currentFavClass:string;

  constructor() { 
    this.isSelected=this.getFavouriteSelection();
    this.resetFavClass();
  }

  ngOnInit() {
  }

  private getFavouriteSelection(){
    return false;
  }
  public favClick(){
    this.isSelected=!this.isSelected;
    this.resetFavClass();
    this.change.emit();
  }
  private resetFavClass(){
    if(this.isSelected)
      this.currentFavClass='glyphicon glyphicon-star';
    else
      this.currentFavClass='glyphicon glyphicon-star-empty';
  }
}
