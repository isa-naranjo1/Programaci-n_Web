import React from 'react';
import './Btn.css';

const Button = ({ onClick, children }) => {
    return (
        <button className='Btn' onClick={onClick}>{children}</button>
    );
};

export default Button;
