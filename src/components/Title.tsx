import React from "react";

type TitleProps = {
    className?: string;
    children?: React.ReactNode;
};


const Title:React.FC<TitleProps> = ({children, ...props}: TitleProps)=> {
    return <h1 className="text-3xl text-slate-100 font-bold text-center" {...props}>{children}</h1>
}

export default Title