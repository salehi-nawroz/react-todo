import React from "react";

let AddTodoForm = (props) => {
  
    let handleAddTodo = (event) => {
        event.preventDefault();
        const todoTitle = event.target.title.value;
        console.log(todoTitle);
        event.target.reset();

        props.onAddTodo(todoTitle );
    }
  
  return (
        <form onSubmit={handleAddTodo}>
             <label htmlFor="todoTitle">Title</label>
             <br/>
            <input type="text" name="title" id="todoTitle" />
            <br/>
            <button type="submit" >Add</button>
        </form>
    )
}

export default AddTodoForm;