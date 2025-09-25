import { useState } from "react";
import InputTasks from "./InputTasks";
import GenericButton from "./GenericButton";


type AddTasksProps = {
    onTaskAdd: (title: string, description: string) => void;
}


    const AddTasks = ({onTaskAdd}: AddTasksProps) => {
        const [title, setTitle] = useState('');
        const [description, setDescription] = useState('');


    const OnClickAdd = () => {
        if (title.trim() === '' || description.trim() === '') {
            alert('Por favor, preencha todos os campos');
            return;
        }
        onTaskAdd(title, description)
    }

    return (        
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <InputTasks value={title} placeholder="Nova tarefa" onChange={e => setTitle(e.target.value)}  />
            <InputTasks value={description} placeholder="Nova descrição" onChange={e => setDescription(e.target.value)}  />
            <GenericButton onClick={OnClickAdd} className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">Adicionar</GenericButton>           
        </div>
    )
}
export default AddTasks 