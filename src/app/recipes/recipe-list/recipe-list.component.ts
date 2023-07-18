import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  //This array only hold recipe objects
  recipes: Recipe[] = [
    new Recipe('test-name', 'test-Description', 'https://www.cookingclassy.com/wp-content/uploads/2018/09/beef-stroganoff-14.jpg'),
    new Recipe('test-name2', 'test-Description2', 'https://www.cookingclassy.com/wp-content/uploads/2018/09/beef-stroganoff-14.jpg'),
    new Recipe('test-name', 'test-Description3', '')
  ];

  constructor(){};

  ngOnInit(){};

  
}
