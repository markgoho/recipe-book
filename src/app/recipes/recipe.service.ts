import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very Tasty', 'http://images.media-allrecipes.com/userphotos/150x150/1117121.jpg', []),
    new Recipe('Summer Salad', 'Okayish', 'https://www.citarella.com/wp/wp-content/uploads/2016/08/summer-salad-150x150.jpg', [])
  ];
  constructor() { }
  getRecipes() {
    return this.recipes;
  }
}
