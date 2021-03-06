import { Routes, RouterModule } from '@angular/router'
import { RecipesComponent } from '../components/recipes/recipes.component';
import { ShoppingListComponent } from '../components/shopping-list/shopping-list.component';
import {RECIPE_ROUTES} from "./recipe.routes";

export const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES},
    {path: 'shopping-list', component: ShoppingListComponent}
];

/*Set routing up for root of app*/
export const routing = RouterModule.forRoot(APP_ROUTES);
