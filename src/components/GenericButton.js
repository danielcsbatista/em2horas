import { jsx as _jsx } from "react/jsx-runtime";
const GenericButton = ({ children, ...props }) => (_jsx("button", { ...props, children: children }));
export default GenericButton;
