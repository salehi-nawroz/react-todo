import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

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
            
            <InputWithLabel todoTitle="Title" value={todoTitle} handleTitleChange={handleTitleChange}>
                <strong>Title</strong>
           </InputWithLabel>
            <br/>
            <button type="submit" >Add</button>
        </form>
    )
}

export default AddTodoForm;