import React from "react";
import TodoListItem from "./TodoListItem";


let TodoList = ({List}) => (
        <ul>
        { List.map((item) =>(
            <TodoListItem key={item.id} todo={item} />
          ))} 
        
    </ul>);
export default TodoList;