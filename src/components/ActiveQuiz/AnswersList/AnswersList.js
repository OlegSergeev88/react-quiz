import React, { Component } from 'react';
import classes from './AnswersList.module.css';
import AnswerItem from './AnswerItem/AnswerItem'

const AnswersList = ({ answers, handleAnswerClick, answerState }) => (
    <ul className={classes.AnswersList}>
        {answers.map((answer, index) => (
            <AnswerItem
                key={index}
                number={index}
                answer={answer}
                handleAnswerClick={handleAnswerClick}
                answerState={answerState ? answerState[answer.id] : null}
            />
        ))}
    </ul>
)

export default AnswersList;
