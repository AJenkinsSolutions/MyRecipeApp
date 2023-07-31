import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  //Image placeholder
  image: string = 'https://tse4.mm.bing.net/th?id=OIP.BbGBZnhKrxaLRC4CJYU8WQHaHu&pid=ImgDet&rs=1';
  //This array only hold recipe objects
  
  recipes: Recipe[] = [
    new Recipe('test-name', 'test-Description', this.image),
    new Recipe('test-name2', 'test-Description2', this.image),
    new Recipe('test-name', 'test-Description3', this.image)
  ];

  constructor(){};

  ngOnInit(){};

  
}
