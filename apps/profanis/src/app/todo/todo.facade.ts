import { AddItemAction, ToggleItemAction } from './store/todo.actions';
import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Select, Store } from '@ngxs/store';
import { TodoModel } from './types/todo';
import { TodoSelectors } from './store/todo.selectors';
import { Observable } from 'rxjs';

@Injectable()
export class TodoFacade {
    @Select(TodoSelectors.todoItems) todoItems$!: Observable<TodoModel[]>;

    constructor(private _store: Store) {}

    @Dispatch()
    addItem(name: string): AddItemAction {
        // this._store.dispatch(new AddItemAction(name));
        //  with NgxsDispatchPluginModule
        return new AddItemAction(name);
    }

    @Dispatch()
    toggleItem(todo: TodoModel): ToggleItemAction {
        // this._store.dispatch(new ToggleItemAction(todo.id));
        //  with NgxsDispatchPluginModule
        return new ToggleItemAction(todo.id);
    }
}
