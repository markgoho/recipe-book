import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../ingredient';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very Tasty', 'http://images.media-allrecipes.com/userphotos/150x150/1117121.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'https://www.citarella.com/wp/wp-content/uploads/2016/08/summer-salad-150x150.jpg', [
      new Ingredient('Lettuce', 5),
      new Ingredient('Tomatoes', 2),
      new Ingredient('Dressing', 1)
    ])
  ];
  constructor() { }
  getRecipes() {
    return this.recipes;
  }
}
