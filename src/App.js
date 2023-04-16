import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {
  let [newTodo,setNewTodo] = useState('');
  return (
    <div>
         <h1>Todo Lists</h1>
         <AddTodoForm onAddTodo={setNewTodo} />
         <p>The new Item is <b> {newTodo} </b></p>
         <TodoList />
    </div>
  );
}

export default App;
