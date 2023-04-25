import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {
  
  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  }

  return (
    <div>
         <h1>Todo Lists</h1>
         <AddTodoForm onAddTodo={addTodo} />
         <p>The new Item is <b>  </b></p>
         <TodoList List= {todoList} />
    </div>
  );
}


export default App;
