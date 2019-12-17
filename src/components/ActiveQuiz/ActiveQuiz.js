import React, { Component } from 'react';
import classes from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = ({ answers, question,
    rightAnswerId, handleAnswerClick,
    answerNumber, quizLength, answerState }) => {



    return (<div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>{answerNumber}.</strong>&nbsp;
                {question}
            </span>
            <small>{answerNumber} from {quizLength} </small>
        </p>
        <AnswersList
            answerState={answerState}
            answers={answers}
            handleAnswerClick={handleAnswerClick}
        />
    </div>)
}

export default ActiveQuiz;
