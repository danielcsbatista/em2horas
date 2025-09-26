import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import GenericButton from "./GenericButton";
const Tasks = ({ tasks, onTaskChecked, onTaskDelete }) => {
    const navigate = useNavigate();
    const handleNavigate = (task) => {
        const queryParams = new URLSearchParams({
            title: task.title,
            description: task.description
        });
        navigate(`/tasks?${queryParams.toString()}`);
    };
    return (_jsx("ul", { className: "space-y-4 p-6 bg-slate-200 rounded-md shadow", children: tasks.map((task) => (_jsxs("li", { className: "flex gap-2", children: [_jsx(GenericButton, { onClick: () => onTaskChecked(task), className: `bg-slate-400 text-white p-2 rounded w-full text-left ${task.isCompleted && 'line-through'}`, children: task.title }), _jsx(GenericButton, { onClick: () => handleNavigate(task), className: "bg-slate-400 p-2 rounded-md text-white", children: _jsx(ChevronRightIcon, {}) }), _jsx(GenericButton, { onClick: () => onTaskDelete(task), className: "bg-slate-400 p-2 rounded-md text-white", children: _jsx(TrashIcon, {}) })] }, task.id))) }));
};
export default Tasks;
