import React from 'react';
import '../../scss/UI/button.scss';

interface ButtonProps {
    children: string;
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    );
};
