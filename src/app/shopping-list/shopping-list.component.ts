import { Component } from '@angular/core';
import { ingredient } from '../ingredient/ingredient.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredients: ingredient[] = [
    new ingredient('salt', 1),
    new ingredient('pepper', 1)
  ];
  
  constructor(){}


}
