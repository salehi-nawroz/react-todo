import React from "react";
import TodoListItem from "./TodoListItem";


const todoList =[
    {
      id:1,
      title: 'Complete assignment',
    },
    {
      id:2,
      title: 'Start Programming',
    },
    {
      id:3,
      title: 'React Tutorials',
    },
    {
      id:4,
      title: 'Front end development',
    },
  ] 

let TodoList = () => (
        <ul>
        { todoList.map((item) =>(
            <TodoListItem key={item.id} todo={item} />
          ))} 
        
    </ul>);
export default TodoList;