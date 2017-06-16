import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import {Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService{
    
    recipeChanged = new Subject<Recipe[]>();
    
    recipes: Recipe[] = [
                            new Recipe('test recipe 1',"test description                                            1","https://static01.nyt.com/images/2012/06/19/science/20recipehealth/20recipehealth-popup-v2.jpg",[{name: 'Apple',amount: 6},{name: 'Mango',amount: 5}]),
                            new Recipe('test recipe 2',"test description 2","https://static01.nyt.com/images/2012/06/19/science/20recipehealth/20recipehealth-popup-v2.jpg",[{name: 'Apple',amount: 6},{name: 'Mango',amount: 5}])
                        ];
    constructor(private slService: ShoppingListService){}
                        
    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }
    
    getRecipes(){
        return this.recipes.slice();
    }
    
    getRecipe(index: number){
        return this.recipes[index];
    }
    
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
    
    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }
    
    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }
    
    deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
    }                    
}