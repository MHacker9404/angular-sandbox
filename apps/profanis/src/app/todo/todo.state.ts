import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { AddItemAction, ToggleItemAction } from './todo.actions';
import { TodoModel } from './types/todo';

export interface TodoStateModel {
    items: TodoModel[];
}

@State<TodoStateModel>({
    name: 'todo',
    defaults: { items: [] }
})
@Injectable()
export class TodoState {
    @Action(AddItemAction) private _addItem(
        ctx: StateContext<TodoStateModel>,
        // action: AddItemAction
        { name }: AddItemAction
    ) {
        if (!name) return;

        const state = ctx.getState();
        const todo: TodoModel = {
            id: Math.floor(Math.random() * 1000),
            isDone: false,
            title: name
        };

        ctx.setState({
            ...state,
            items: [...state.items, todo]
        });
    }

    @Action(ToggleItemAction) private _toggleItem(
        ctx: StateContext<TodoStateModel>,
        // action: ToggleItemAction
        { id }: ToggleItemAction
    ) {
        const state = ctx.getState();
        const items: TodoModel[] = state.items.map((item: TodoModel) => {
            if (item.id !== id) return item;
            return { ...item, isDone: !item.isDone };
        });

        ctx.setState({
            ...state,
            items: [...items]
        });
    }
}
