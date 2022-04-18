import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import Recipe from '../recipe.model';
import { DropdownDirectiveModule } from '../../shared/dropdown/dropdown.directive';
import ShoppingListService from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import RecipeService from '../recipe.service';

@Component({
  selector: 'nx-apps-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  public recipe: Recipe | undefined;
  private _id: number | undefined;
  constructor(private _shoppingListSvc: ShoppingListService, private _route: ActivatedRoute, private _recipSvc: RecipeService, private _router:Router) {
    this._id = +this._route.snapshot.params['id'];
    this._recipSvc.getRecipe(this._id).then(recipe => this.recipe = recipe);
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this._id = +params['id'];
      this._recipSvc.getRecipe(this._id).then(recipe => this.recipe = recipe);
    });
  }

  onAddToShoppingList = () => this._shoppingListSvc.addIngredients(this.recipe!.ingredients);
  public onEditRecipe = async () => this._router.navigate(['edit'], {relativeTo: this._route});
}

@NgModule({
  imports: [CommonModule, DropdownDirectiveModule],
  declarations: [RecipeDetailsComponent],
  exports: [RecipeDetailsComponent],
})
export class RecipeDetailsComponentModule { }
