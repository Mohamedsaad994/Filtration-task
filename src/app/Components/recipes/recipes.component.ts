import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesService } from 'src/app/Services/recipes.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit{

  constructor(private _RecipesService:RecipesService){}

  recipesList:any = [];


  ngOnInit(): void {
    this.getRecipes()
  }

  getRecipes():void{
    this._RecipesService.getRecipes().subscribe({
      next:(response)=>{
        this.recipesList= response.meals
        console.log(this.recipesList);
      }
    })
  }
}
