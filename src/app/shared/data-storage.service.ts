import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from './ingredient.model';
import { AuthService } from '../auth/auth.service';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService{

    constructor(private http: Http, 
                private recipeService: RecipeService, 
                private authService: AuthService){}
    
    storeRecipes(){
       const token = this.authService.getToken();
       return this.http.put('https://recipe-book-6bcb4.firebaseio.com/recipes.json?auth='+token,this.recipeService.getRecipes());
    }
    
    getRecipes(){
        const token = this.authService.getToken();
        
        this.http.get('https://recipe-book-6bcb4.firebaseio.com/recipes.json?auth='+token).map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for(let recipe of recipes){
                    if(!recipe['ingredients']){
                       console.log(recipe);
                       recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        
        ).subscribe(
            (recipes : Recipe[]) => {
                console.log("i am getting the recipes");
                this.recipeService.setRecipes(recipes);
            }
        );
    }

}