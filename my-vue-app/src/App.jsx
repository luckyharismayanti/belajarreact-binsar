import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todo, setTodo] = useState ("")
  const [todos, setTodos] = useState(["Makanan","Minum","Mandi"]);
const handleChange = event=> {
  setTodo(event.target.value)
}


const onSubmit = event => {
  event.preventDefault()
  setTodos([...todos,todo])
  setTodo("")
}

const onDelete = (index) => {
  setTodos(todos.filter((value, i) => i !== index))
}
  return (
    <div className="App">
      <h1> Todo List</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={todo} placeholder="masukkan todo yang baru" onChange={handleChange}/>
        <button>Create Todo</button>
      </form>
      <div>
        <ul id="todolist">
          {todos.map((todo, index) => <li>
            <span> {todo} </span>
            <div>
              <button type='button'>Edit</button>
              <button type='button' onClick={() =>onDelete(index)}>Hapus</button>
            </div>
          </li>)}



          {/* /* <li>
            <span> Belajar </span>
            <div>
              <a href="">Edit</a>
              <a href="">Hapus</a>
            </div>
          </li>
          <li>
            <span> Kelas Front End </span>
            <div>
              <a href="">Edit</a>
              <a href="">Hapus</a>
            </div>
          </li>
          <li>
            <span> Tidur </span>
            <div>
              <a href="">Edit</a>
              <a href="">Hapus</a>
            </div>
          </li> */} 
        </ul>
      </div>
    </div>
  );
}

export default App;
