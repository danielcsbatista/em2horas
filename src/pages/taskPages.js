import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";
import GenericButton from "../components/GenericButton";
const TaskPages = () => {
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    const navigate = useNavigate();
    return (_jsx("div", { className: "w-screen h-screen bg-slate-500 p-6", children: _jsxs("div", { className: "w-[500px] space-y-4", children: [_jsxs("div", { className: "flex justify-center relative", children: [_jsxs(GenericButton, { onClick: () => navigate(-1), className: " absolute top-0 left-0 bottom-0 p-2 text-white", children: [_jsx(ChevronLeftIcon, {}), " "] }), _jsx(Title, { children: "Detalhes da tarefa" })] }), _jsxs("div", { className: "bg-slate-200 rounded-md shadow p-6", children: [_jsx("h2", { className: "text-2xl font-bold mb-4 text-slate-600", children: title }), _jsx("p", { className: "text-slate-600", children: description })] })] }) }));
};
export default TaskPages;
