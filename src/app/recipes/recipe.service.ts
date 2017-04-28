import {Recipe} from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test recipe', 'http://www.foodtolove.com.au/assets/images/badge-collection.png'),
    new Recipe('Another Test Recipe', 'This is a test recipe', 'http://www.foodtolove.com.au/assets/images/badge-collection.png')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
