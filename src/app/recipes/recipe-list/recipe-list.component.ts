import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipesSubscription: Subscription;
  recipes: Recipe[] ;
  constructor(private recipeService : RecipeService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipesSubscription = this.recipeService.recipeChanged.subscribe(
        (recipes: Recipe[]) => {
            this.recipes = recipes;
        }
    );
  }
  
  onAddRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }
  
  ngOnDestroy(){
    this.recipesSubscription.unsubscribe();
  }

}