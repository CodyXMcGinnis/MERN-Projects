import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {

  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const handleSubmit = (e) => {
    
    e.preventDefault();

    if (toDo.length === 0){
      return;
    }

    const toDoItem = {

      text: toDo,
      complete: false

    }

    setToDoList([... toDoList, toDoItem]);
    setToDo("");
  };

  const handleDelete = (x) => {

    const deleteToDos = toDoList.filter((_z, i) => {
      return i !== x;
    });

    setToDoList(deleteToDos);

  }

  const handleComplete = (x) => {

    const updateToDo = toDoList.map((todo,i) => {

      if(x === i){
        todo.complete = !todo.complete;
      }
      return todo;

    });

    setToDoList(updateToDo);
  }

  return (
    <div className="App">
      <form onSubmit={(e) => {
        handleSubmit(e);
      }}>
        <input  onChange={(e) => {
          setToDo(e.target.value);
        }}
        type="text" value={toDo}/>
        <div>
          <button>Add</button>
        </div>
      </form>

      {toDoList.map((todo, i) => {

        const toDoListClasses = ["bold"];

        if (todo.complete){
          toDoListClasses.push("line-through");
        }

        return(
          <div key={i}>
            <span className={toDoListClasses.join(" ")}>{todo.text}  </span>
            <input onChange={(e) => {
              handleComplete(i);
            }}checked={todo.complete} type="checkbox"/>
            <button onClick={(e) => {
              handleDelete(i);
            }}>  Delete</button>
          </div>
        )
      })

      }

    </div>
  );
}

export default App;
