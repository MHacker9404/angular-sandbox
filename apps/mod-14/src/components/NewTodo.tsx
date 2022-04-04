import React, {useRef} from 'react';
import './NewTodo.scss';

interface NewTodoProps {
  onAddHandler: (text: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const text = textInputRef.current!.value;
    props.onAddHandler(text);
   };

  return <form onSubmit={onSubmitHandler}>
    <div className='form-control'>
      <label htmlFor="todo-text">Todo Text</label>
      <input type="text" name="todo-text" id="text" ref={textInputRef} />
    </div>
    <button type="submit">Add Todo</button>
  </form>;
 };

export default NewTodo;