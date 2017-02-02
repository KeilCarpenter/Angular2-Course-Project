import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import {Recipe} from '../models/recipe'

@Injectable()
export class RecipeService {
  /*Array of recipe objects*/
  private recipes: Recipe[] = [
    new Recipe('Chicken Tikka Masala', '4/5 Stars', 'https://s-media-cache-ak0.pinimg.com/originals/30/08/09/300809549465a4e5ec8ac31c9d5ff2ce.jpg',[new Ingredient('French Fries', 2),
    new Ingredient('Pork Meat', 1)]),
    new Recipe('Asain Zing Wings', '4/5 Stars', 'http://seonkyounglongest.com/wp-content/uploads/2014/02/167921_1273196766571_4035001_n1.jpg',[])
  ];
  constructor() { }
  getRecipes(){
      return this.recipes;
  }

}