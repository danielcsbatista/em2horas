import React from 'react';

type InputTasksProps = {
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputTasks = ({...props}:InputTasksProps) => {
    return (
        <input {...props} className="border border-slate-400 outline-slate-400 px-4 py-2 rounded-md" type="text"  />
    );
};

export default InputTasks;