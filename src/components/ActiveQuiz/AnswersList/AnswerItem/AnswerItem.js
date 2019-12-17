import React from 'react';
import classes from './AnswerItem.module.css';

const AnswerItem = ({ answer, number, handleAnswerClick, answerState }) => {

    const cls = [classes.AnswerItem];

    if (answerState) {
        cls.push(classes[answerState]);
    }

    return (
        <li className={cls.join(' ')} onClick={() => (handleAnswerClick(answer.id))}>
            {number + 1}.{answer.text}
        </li>
    )
}

export default AnswerItem;