import React from 'react';

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

function App() {
  return (
    <div>
         <h1>Todo Lists</h1>

          <ul>
            { todoList.map(function (item){
              return (
                      <li key={item.id}>
                          <span><b>ID: </b> {item.id}</span>&nbsp;&nbsp;
                          <span><b>Title: </b>
                            {item.title}
                          </span>&nbsp;&nbsp;
                      </li>
                    );
              }) 
            }
        </ul>
    </div>
  );
}

export default App;
