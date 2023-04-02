import React from "react";

let TodoListItem = (probs) => {
        let item=probs.todo;
        return (
            <li>
                <span><b>ID: </b> {item.id}</span>
                    &nbsp;&nbsp;
                <span><b>Title: </b>{item.title} </span>
             </li>
        );
}

export default TodoListItem;