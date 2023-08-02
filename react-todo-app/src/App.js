import { useState } from "react";
import "./App.css";
import Completed from "./Completed";
import SlotTasks from "./SlotTasks";
import {useEffect} from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks || []);
  }, []);
  function addTask(name) {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }
  

  return (
    <main>
      <h2> {(Completed.donenum)/(SlotTasks.todonum)} Completed</h2>
      <SlotTasks onAdd={addTask} />
      {tasks.map((task) => (
        <Completed {...task}/>
      ))}
    </main>
  );
}

export default App;
