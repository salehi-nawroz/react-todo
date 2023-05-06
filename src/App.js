import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const useSemiPersistentState = () => {
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList'))|| []);
    React.useEffect(() => {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
      }, [todoList]);

      return [todoList, setTodoList];
  };

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  }
  return (
    <>
         <h1>Todo Lists</h1>
         <AddTodoForm onAddTodo={addTodo} />
         <p>The new Item is <b>  </b></p>
         <TodoList List= {todoList} />
    </>
  );
}


export default App;
