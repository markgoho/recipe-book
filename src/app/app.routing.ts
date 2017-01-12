import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { recipesRouting } from './recipes/recipes.routing';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule'},
  { path: 'shopping-list', component: ShoppingListComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);