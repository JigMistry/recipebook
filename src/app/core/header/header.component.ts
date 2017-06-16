import { Component } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import { Response } from '@angular/http';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    
    constructor(private dataStorageService: DataStorageService, public authService: AuthService){}
    onSaveData(){
        this.dataStorageService.storeRecipes().subscribe(
            (response: Response) => {
                console.log(response.json());
            }
        );
    }
    
    onFetchData(){
        this.dataStorageService.getRecipes();
    }
    
    onLogOut(){
        this.authService.logout();
    }
}