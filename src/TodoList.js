import React from "react";
import TodoListItem from "./TodoListItem";


let TodoList = ({List, onRemoveTodo}) => (
        <ul>
        { List.map((item) =>(
            <TodoListItem key={item.id} todo={item} onRemoveTodo={onRemoveTodo} />
          ))} 
        
    </ul>);
export default TodoList;