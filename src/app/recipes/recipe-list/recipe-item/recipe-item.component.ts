import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
    
  @Input('recipeData') recipe: Recipe;
  @Input('recipeIndex') recipeIndex: number;
  @Output() recipeSelected = new EventEmitter<void>();
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  
  onSelected(){
      console.log("click calling");
      //this.recipeService.recipeSelected.emit(this.recipe);
  }

}
