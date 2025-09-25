import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";
import GenericButton from "../components/GenericButton";


const TaskPages = () => {
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    const navigate = useNavigate();


    return (
        <div className="w-screen h-screen bg-slate-500 p-6">        
            <div className="w-[500px] space-y-4">
                <div className="flex justify-center relative">
                    <GenericButton onClick={() => navigate(-1)} className=" absolute top-0 left-0 bottom-0 p-2 text-white"><ChevronLeftIcon /> </GenericButton>
                    <Title>Detalhes da tarefa</Title>
                 </div>
                <div className="bg-slate-200 rounded-md shadow p-6">
                    <h2 className="text-2xl font-bold mb-4 text-slate-600">{title}</h2>
                    <p className="text-slate-600">{description}</p>
                </div>     
            </div>   
        </div>
    );
};

export default TaskPages;