import React, { MouseEventHandler, useState } from 'react';
import TodoList from 'src/components/TodoList';
import NewTodo from 'src/components/NewTodo';
import TodoModel from './todo.model';
import styles from './app.module.scss';

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoModel[]>([]);

  const todoAddHandler = (text: string): void => {
    console.info(text);
    setTodos((prevTodos) => [...prevTodos, { id: Math.random(), text: text }]);
  };

  const todoDeleteHandler = (
    id: number
  ): MouseEventHandler<HTMLButtonElement> | undefined => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    return;
  };

  return (
    <div className="App">
      <NewTodo onAddHandler={todoAddHandler} />
      <TodoList todos={todos} onDeleteHandler={todoDeleteHandler} />
    </div>
  );
};

export default App;
