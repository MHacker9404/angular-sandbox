import React, { MouseEventHandler } from 'react';
import './TodoList.scss';

interface TodoListProps {
  todos: { id: number; text: string }[];
  onDeleteHandler: (
    id: number
  ) => MouseEventHandler<HTMLButtonElement> | undefined;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.onDeleteHandler.bind(null, todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
