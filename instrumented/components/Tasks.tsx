import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { Task } from "../App";
import { useNavigate } from "react-router-dom";
import GenericButton from "./GenericButton";

type TasksProps = {
  tasks: Task[];
  onTaskChecked: (task: Task) => void;
  onTaskDelete: (task: Task) => void;
};

const Tasks = ({ tasks, onTaskChecked, onTaskDelete }: TasksProps) => {
    const navigate = useNavigate();
    const handleNavigate = (task: Task) => {
        const queryParams = new URLSearchParams({
            title: task.title,
            description: task.description
        })
        navigate(`/tasks?${queryParams.toString()}`);
    }

      return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <GenericButton onClick={() => onTaskChecked(task)} className={`bg-slate-400 text-white p-2 rounded w-full text-left ${task.isCompleted && 'line-through'}`}>{task.title}</GenericButton>
                    <GenericButton onClick={() => handleNavigate(task)} className="bg-slate-400 p-2 rounded-md text-white"><ChevronRightIcon /></GenericButton>
                    <GenericButton onClick={() => onTaskDelete(task)} className="bg-slate-400 p-2 rounded-md text-white"><TrashIcon /></GenericButton>
                </li>
            ))}
        </ul>
    );
};

export default Tasks;