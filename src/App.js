import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import Title from "./components/Title";
function App() {
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    useEffect(() => {
        /*  const fetchTasks = async () => {
            try {
              const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
              setTasks(await response.json());
            }catch (error) {
              console.error('Error fetching tasks:', error);
            }
          }
         // fetchTasks();*/
    }, []);
    function onTaskChecked({ id }) {
        const updatedTasks = tasks.map(t => { return (t.id === id) ? { ...t, isCompleted: !t.isCompleted } : t; });
        setTasks(updatedTasks);
    }
    function onTaskDelete({ id }) {
        const deleteTasks = tasks.filter(t => t.id !== id);
        setTasks(deleteTasks);
    }
    function onTaskAdd(title, description) {
        const newTask = {
            id: v4(),
            title,
            description,
            isCompleted: false
        };
        setTasks([...tasks, newTask]);
    }
    return (_jsx("div", { className: "w-screen h-screen bg-slate-500 flex justify-center p-10", children: _jsxs("div", { className: "w-[500px] space-y-4", children: [_jsx(Title, { children: " Gerenciador de tarefas" }), _jsx(AddTasks, { onTaskAdd: onTaskAdd }), _jsx(Tasks, { tasks: tasks, onTaskChecked: onTaskChecked, onTaskDelete: onTaskDelete })] }) }));
}
export default App;
