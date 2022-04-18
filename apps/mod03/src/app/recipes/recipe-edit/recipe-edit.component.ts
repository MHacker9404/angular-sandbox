import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { runInThisContext } from 'vm';

@Component({
  selector: 'nx-apps-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
  id: number | undefined | null;
  editMode: boolean = false;

  constructor(private _route: ActivatedRoute) {
    this.id = +this._route.snapshot.params['id'];
    this.editMode = this.id !== null;
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = this.id !== null;
    });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [RecipeEditComponent],
  exports: [RecipeEditComponent],
})
export class RecipeEditComponentModule { }
