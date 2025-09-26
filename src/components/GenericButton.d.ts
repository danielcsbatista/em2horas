import React from 'react';
type GenericButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
};
declare const GenericButton: React.FC<GenericButtonProps>;
export default GenericButton;
