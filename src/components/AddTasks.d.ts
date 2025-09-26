type AddTasksProps = {
    onTaskAdd: (title: string, description: string) => void;
};
declare const AddTasks: ({ onTaskAdd }: AddTasksProps) => import("react/jsx-runtime").JSX.Element;
export default AddTasks;
