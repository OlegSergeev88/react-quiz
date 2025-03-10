import React from 'react';
import classes from './Input.module.css';

function isInvalid({ valid, touched, shouldValid }) {
    return !valid && touched && shouldValid
}

const Input = ({ type, onChange, value, label, errorMessage, valid, touched, shouldValidate }) => {

    const inputType = type || 'text';
    const error = errorMessage || 'U did mistake'
    const htmlFor = `${inputType} + ${Math.random()}`;
    const cls = [
        classes.Input,
        isInvalid(valid, touched, shouldValidate) ? classes.invalid : null
    ];



    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{label}</label>
            <input
                id={htmlFor}
                type={inputType}
                onChange={onChange}
                value={value}
            />

            <span>{touched ? (valid ? null : error) : null}</span>
        </div>
    )
}

export default Input;