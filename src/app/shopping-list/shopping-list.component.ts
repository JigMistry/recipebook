import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  
  private ingredientChangedSubscription: Subscription;
  ingredients: Ingredient[];
  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientChangedSubscription = this.shoppingListService.ingredientChanged
        .subscribe(
            (ingredients: Ingredient[]) => {
                this.ingredients = ingredients;
            }
        );
  }
  
  onEditItem(index: number){
    this.shoppingListService.startEditing.next(index);
  }
  
  ngOnDestroy(){
    this.ingredientChangedSubscription.unsubscribe();
  }
  
}
