import { useState } from "react";
import './App.css';
import Completed from './Completed';
import SlotTasks from './SlotTasks';

function App() {
  const[tasks,setTasks] = useState([]);
  function addTask(name){
    setTasks(prev => {
      return [...prev, {name:name,done:false}];
    })

  }
  return (
    
      <main>
          <SlotTasks onAdd={addTask}/>
          {tasks.map(task => (<Completed {...task}/>))}
          
          
      </main>
      
  );
}

export default App;
