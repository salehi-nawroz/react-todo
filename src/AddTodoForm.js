import react from "react";

let AddTodoForm = () => {
  return (
        <form>
             <label htmlFor="todoTitle">Title</label>
             <br/>
            <input type="text" id="todoTitle" ></input>&nbsp;&nbsp;
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTodoForm;