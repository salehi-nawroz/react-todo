import React from "react";

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

let TodoList = () => {
    return (
        <ul>
        { todoList.map(function (item){
          return (
                  <li key={item.id}>
                      <span><b>ID: </b> {item.id}</span>&nbsp;&nbsp;
                      <span><b>Title: </b>
                        {item.title}
                      </span>&nbsp;&nbsp;&nbsp;&nbsp;
                  </li>
                );
          }) 
        }
    </ul>
    );
}

export default TodoList;