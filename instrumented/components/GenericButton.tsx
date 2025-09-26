import React from 'react';

type GenericButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
};

const GenericButton: React.FC<GenericButtonProps> = ({children, ...props}:GenericButtonProps) => (
    <button {...props}>
        {children}
    </button>
);

export default GenericButton;