
import { useEffect, useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import {v4} from "uuid";
import Title from "./components/Title";

export interface Task
{
      id: string | number;
      title: string;
      description: string;
      isCompleted: boolean;
}

function App ()
{  
  const [tasks, setTasks] = useState<Task[]>(
    () => {
      const storedTasks = localStorage.getItem('tasks');
      return storedTasks ? JSON.parse(storedTasks) : [];
    })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));    
  }, [tasks]);


  useEffect(() => {

      const fetchTasks = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
          setTasks(await response.json()); 
        }catch (error) {
          console.error('Error fetching tasks:', error);
        }
      }
     // fetchTasks();
  }, []);

  function onTaskChecked({id}: Task) {
    const updatedTasks = tasks.map(t => { return (t.id === id) ? { ...t, isCompleted: !t.isCompleted } : t }
    );
    setTasks(updatedTasks);    
  }

  function onTaskDelete({id}: Task) {
    const deleteTasks = tasks.filter(t => t.id !== id);
    setTasks(deleteTasks);    
  }

  function onTaskAdd(title: string, description: string) {

    const newTask: Task = {
      id: v4(),
      title,
      description,
      isCompleted: false
    };
    setTasks([...tasks, newTask]);
  }



  return(
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-10">
      <div className="w-[500px] space-y-4">
          <Title> Gerenciador de tarefas</Title>
          <AddTasks onTaskAdd={onTaskAdd} />
          <Tasks tasks={tasks} onTaskChecked={onTaskChecked} onTaskDelete={onTaskDelete} />
      </div>   
    </div>
  )
}

export default App