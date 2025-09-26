import { jsx as _jsx } from "react/jsx-runtime";
const Title = ({ children, ...props }) => {
    return _jsx("h1", { className: "text-3xl text-slate-100 font-bold text-center", ...props, children: children });
};
export default Title;
