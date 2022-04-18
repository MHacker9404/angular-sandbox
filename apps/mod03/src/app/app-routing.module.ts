import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponentModule, ErrorComponent } from './error/error.component';
import { PageNotFoundComponent, PageNotFoundComponentModule } from './page-not-found/page-not-found.component';
import {
    RecipeDetailsComponent,
    RecipeDetailsComponentModule,
} from './recipes/recipe-details/recipe-details.component';
import { RecipeStartComponent, RecipeStartComponentModule } from './recipes/recipe-start/recipe-start.component';
import { RecipesComponent, RecipesComponentModule } from './recipes/recipes.component';
import { ShoppingListComponent, ShoppingListComponentModule } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes',
        component: RecipesComponent,
        children: [
            { path: '', component: RecipeStartComponent },
            { path: ':id', component: RecipeDetailsComponent },
        ],
    },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: 'error', component: ErrorComponent, data: { message: 'message' } },
    { path: '**', redirectTo: '/not-found' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        PageNotFoundComponentModule,
        ErrorComponentModule,
        RecipesComponentModule,
        ShoppingListComponentModule,
        RecipeStartComponentModule,
        RecipeDetailsComponentModule,
    ],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule {}
