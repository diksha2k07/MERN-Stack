import React ,{useState} from 'react'
import { useEffect } from 'react';
import axios from 'axios'
const Todo = () => {

  const[todo, setTodo] = useState([]);
  const[task, setTask] = useState('');
  const[editing,setEditing] = useState(null);

   const fetchTodo =async() =>{
     const res=await axios.get("http://localhost:3000/");
     setTodo(res.data);
   }

   useEffect(()=>{
    fetchTodo();
    },[]);

  const handleAddorUpdate = async (e) => {
      e.preventDefault();
      if(editing !== null){
          await axios.put(`http://localhost:3000/update/${editing}`, {task:task});
          setEditing(null);
      } 
      else {
         await axios.post("http://localhost:3000/create", {task:task});
      }
      setTask('');
      fetchTodo();
    }

  const handleEdit = (todos) => {
    setTask(todos.task);
    setEditing(todos._id);
  }

  const handleDelete = async(id) => {
    await axios.delete(`http://localhost:3000/delete/${id}`);
    fetchTodo();
  }

  const handleToggleComplete = async(todos) => {
    await axios.put(`http://localhost:3000/update/${todos._id}`, {completed: !todos.completed});
    fetchTodo();
  };

  
  return (
    <div>
      <h1>Todo List</h1>
      <label>Task:</label>
      <input type="text" placeholder='Enter The Task' value={task} onChange={(e) => setTask(e.target.value)}></input>
      <button onClick={handleAddorUpdate}>{editing===null?"Add":"Update"}</button>

      <ul>
        {todo.map((todos) => (
          <li key={todos._id}>
            <span 
            style={{
              textDecoration: todos.completed?"line-through":"none",cursor:"pointer"}}
               onClick={() => handleToggleComplete(todos)} >{todos.task}
            </span>
            <button onClick={() => handleEdit(todos)}>Edit</button>
            <button onClick={() => handleDelete(todos._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
