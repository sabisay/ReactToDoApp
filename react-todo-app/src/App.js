import { useState } from "react";
import "./App.css";
import SlotTasks from "./SlotTasks";
import Completed from "./Completed";

function App() {
  const [tasks, setTasks] = useState([]);
  const [num, setNum] = useState(0);

  function addTask(name) {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }

  function handleTaskCompletion() {
    setNum((prevNum) => prevNum + 1);
  }

  function removeTask(indexToRemove){
    setTasks(prev =>{
      return prev.filter((taskObject, index)=> index !== indexToRemove);
      })
    setNum((prevNum) => prevNum - 1);
    }

  function getMessage() {
    const percentage = (num / numberTotal) * 100;
    if (percentage === 100) {
      return "Brave! ";
    } else if (percentage <= 50 && percentage >= 1) {
      return "Keep It Going! ";
    } else if (percentage >= 50) {
      return "You Are Going Well! ";
    } else {
      return "You Can Do It! ";
    }
  }

  const numberTotal = tasks.length;

  return (
    <main>
      <h2>
        {" "}
        {num}/{numberTotal} Completed
      </h2>
      <h3>{getMessage()}</h3>
      <SlotTasks onAdd={addTask} />
      {tasks.map((task, index) => (
        <Completed {...task} 
        onTrash={()=> removeTask(index)}
        onToggle={() => handleTaskCompletion()} />
      ))}

    </main>
    
  );
}


export default App;
