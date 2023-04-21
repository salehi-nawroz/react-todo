import React from "react";

let TodoListItem = ({todo}) => {
        return (
            <li>
                <span><b>ID: </b> {todo.id}</span>
                    &nbsp;&nbsp;
                <span><b>Title: </b>{todo.title} </span>
             </li>
        );
}

export default TodoListItem;