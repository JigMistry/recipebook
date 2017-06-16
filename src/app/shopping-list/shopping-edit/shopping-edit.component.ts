import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
     
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  @ViewChild('f') slForm: NgForm;
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startEditing.subscribe(
        (index: number)=>{
            this.editMode = true;
            this.editedItemIndex = index;
            this.editedItem = this.shoppingListService.getIngredient(index);
            this.slForm.setValue({
                name: this.editedItem.name,
                amount: this.editedItem.amount
            });
        }
    );
  }
  
  onSubmit(form : NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name,value.amount);
    if(this.editMode){
        this.shoppingListService.updateIngredient(this.editedItemIndex,newIngredient);
    }else{
        this.shoppingListService.addIngredient(newIngredient); 
    }
    this.editMode = false;
    form.reset(); 
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe;
  }
  
  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }
  
  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.slForm.reset();
    this.editMode = false;
  }

}
