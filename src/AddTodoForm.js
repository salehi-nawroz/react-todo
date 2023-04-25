import React, { useState } from "react";

let AddTodoForm = ({onAddTodo}) => {
    const [todoTitle,setTodoTitle] = useState('');
    let handleTitleChange = (event) => {
        const todoNewTodoTitle = event.target.value;
        setTodoTitle(todoNewTodoTitle);
    }

    const handleAddTodo = (e) => {
        e.preventDefault();
        onAddTodo(
            {
                title: todoTitle,
                id: Date.now()
            }
        );
        setTodoTitle(''); 
    };
  
  return (
        <form onSubmit={handleAddTodo}>
             <label htmlFor="todoTitle">Title</label>
             <br/>
            <input type="text" name="title" value={onAddTodo.todoNewTodoTitle} id="todoTitle" onChange={handleTitleChange} />
            <br/>
            <button type="submit" >Add</button>
        </form>
    )
}

export default AddTodoForm;