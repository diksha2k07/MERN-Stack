import React ,{useState} from 'react'

const Todo = () => {

  const[todo, setTodo] = useState([]);
  const[task, setTask] = useState('');
  const[editing,setEditing] = useState(null);

  const handleAddorUpdate = (e) => {
      e.preventDefault();
      if(editing !== null){
        const updatedTodo = [...todo];
        updatedTodo[editing].task = task;
        setTodo (updatedTodo);
        setEditing (null);
      } 
      else {
      setTodo([...todo,{task:task,completed:false}])
      }
      setTask('');
  }

  const handleEdit = (index) => {
    setTask(todo[index].task);
    setEditing(index);
  }

  const handleDelete = (index) => { 
    const updatedTodo = todo.filter((todos,i) => i !== index);
    setTodo (updatedTodo);
    
  }

  const handleToggleComplete = (index) =>{
    const updatedTodo = [...todo];
    updatedTodo[index].completed = !updatedTodo[index].completed;
    setTodo(updatedTodo);
  };

  
  return (
    <div>
      <h1>Todo List</h1>
      <label>Task:</label>
      <input type="text" placeholder='Enter The Task' value={task} onChange={(e) => setTask(e.target.value)}></input>
      <button onClick={handleAddorUpdate}>{editing===null?"Add":"Update"}</button>

      <ul>
        {todo.map((todos, index) => (
          <li key={index}>
            <span 
            style={{
              textDecoration: todos.completed?"line-through":"none",cursor:"pointer"}}
               onClick={() => handleToggleComplete(index)} >{todos.task}
            </span>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
