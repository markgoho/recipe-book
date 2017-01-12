import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { RecipeStartComponent } from './recipe-start.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes.component';
import { recipesRouting } from './recipes.routing';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailComponent
  ],
  imports: [SharedModule, ReactiveFormsModule, recipesRouting]
})
export class RecipesModule {}