import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Select, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { AddItemAction, ToggleItemAction } from '../todo.actions';
import { TodoSelectors } from '../todo.selectors';
import { TodoModel } from '../types/todo';

@Component({
    selector: 'nx-apps-todo',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
    @Select(TodoSelectors.todoItems) todoItems$!: Observable<TodoModel[]>;

    newItemName!: string;
    // items: TodoModel[] = [];

    constructor(private _store: Store) {}

    ngOnInit(): void {
        // this.items = [...new Array(10)].map((_, index) => ({
        //     id: index + 1,
        //     isDone: false,
        //     title: `Todo ${index + 1}`
        // }));
    }

    trackById(index: number, item: TodoModel): number {
        return item.id;
    }
    // public trackById = async (
    //     index: number,
    //     item: TodoModel
    // ): Promise<number> => {
    //     return item.id;
    // };

    toggleItem(todo: TodoModel) {
        this._store.dispatch(new ToggleItemAction(todo.id));
        // const foundTodo = this.items.find((it) => todoItem.id === it.id);
        // if (foundTodo) {
        //     foundTodo.isDone = !foundTodo.isDone;
        // }
    }

    addItem() {
        this._store.dispatch(new AddItemAction(this.newItemName));
        this.newItemName = '';

        // if (!this.newItemName) {
        //     return;
        // }

        // this.items = [
        //     ...this.items,
        //     {
        //         id: Math.round(Math.random() * 1000),
        //         isDone: false,
        //         title: this.newItemName
        //     }
        // ];
    }
}
