import React from 'react';
type InputTasksProps = {
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const InputTasks: ({ ...props }: InputTasksProps) => import("react/jsx-runtime").JSX.Element;
export default InputTasks;
