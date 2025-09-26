import { Task } from "../App";
type TasksProps = {
    tasks: Task[];
    onTaskChecked: (task: Task) => void;
    onTaskDelete: (task: Task) => void;
};
declare const Tasks: ({ tasks, onTaskChecked, onTaskDelete }: TasksProps) => import("react/jsx-runtime").JSX.Element;
export default Tasks;
