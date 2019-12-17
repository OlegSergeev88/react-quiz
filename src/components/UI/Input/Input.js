import React from 'react';
import classes from './Input.module.css';

const Input = ({ type, onChange, value, label, error }) => {

    const inputType = type || 'text';
    const errorMessage = error || 'U did mistake'
    const htmlFor = `${inputType} + ${Math.random()}`;
    const cls = [
        classes.Input
    ]

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{label}</label>
            <input
                id={htmlFor}
                type={inputType}
                onChange={onChange}
                value={value}
            />

            <span>{errorMessage}</span>
        </div>
    )
}

export default Input;