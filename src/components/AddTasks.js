import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import InputTasks from "./InputTasks";
import GenericButton from "./GenericButton";
const AddTasks = ({ onTaskAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const OnClickAdd = () => {
        if (title.trim() === '' || description.trim() === '') {
            alert('Por favor, preencha todos os campos');
            return;
        }
        onTaskAdd(title, description);
    };
    return (_jsxs("div", { className: "space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col", children: [_jsx(InputTasks, { value: title, placeholder: "Nova tarefa", onChange: e => setTitle(e.target.value) }), _jsx(InputTasks, { value: description, placeholder: "Nova descri\u00E7\u00E3o", onChange: e => setDescription(e.target.value) }), _jsx(GenericButton, { onClick: OnClickAdd, className: "bg-slate-500 text-white px-4 py-2 rounded-md font-medium", children: "Adicionar" })] }));
};
export default AddTasks;
