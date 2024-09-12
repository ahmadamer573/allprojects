import React, { useState } from "react";


const todoList = ()=>{
const [taskInput, setTaskInput] = useState('');
const [tasks, setTasks] = useState([]);

const handleInputChange = (e) => {
  setTaskInput(e.target.value);
};

const addTask = () => {
  if (taskInput.trim() !== '') {
    setTasks([...tasks, taskInput]);
    setTaskInput('');
  }
};

const deleteTask = (index) => {
  const newTasks = [...tasks];
  newTasks.splice(index, 1);
  setTasks(newTasks);
};

return (
  <div className="container">
    <h1>To-Do List</h1>
    <input
      type="text"
      placeholder="Add a new task"
      value={taskInput}
      onChange={handleInputChange}
    />
    <button onClick={addTask}>Add</button>
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <span>{task}</span>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);
}
export default todoList;