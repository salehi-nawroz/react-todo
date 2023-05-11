import React from "react";

let TodoListItem = ({todo,onRemoveTodo}) => {
        return (
            <li>
                <span><b>ID: </b> {todo.id}</span>
                    &nbsp;&nbsp;
                <span><b>Title: </b>{todo.title} </span>
                <button type="button" onClick={()=>onRemoveTodo(todo.id)}>Remove</button>
             </li>
        );
}

export default TodoListItem;