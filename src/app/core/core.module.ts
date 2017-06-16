import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';


@NgModule({
    declarations:[
        HeaderComponent,
        HomeComponent
    ],
    imports:[
        AppRoutingModule,
        SharedModule
    ],
    providers: [
        ShoppingListService,
        RecipeService,
        DataStorageService, 
        AuthService
    ],
    exports:[
        AppRoutingModule,
        HeaderComponent
    ]
})
export class CoreModule{

}