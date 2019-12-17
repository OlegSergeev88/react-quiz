import React from 'react';
import classes from './FinishedQuiz.module.css';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';

const FinishedQuiz = ({ results, quiz, onRetryHandler }) => {

    const rightResults = Object.keys(results).reduce((total, arg, i, arr) => {
        if (results[arg] === 'success') {
            total++

        }
        console.log(results)
        return total
    }, 0);



    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {quiz.map((item, index) => {


                    return (<li key={index}>
                        <strong>{item.id}.</strong> &nbsp;
                        {item.question}
                        <span>1 - {results[1]}</span>
                        <span>2 - {results[2]}</span>

                    </li>)

                })}
            </ul>
            <p>


                {rightResults} из {quiz.length}
            </p>

            <Button onClick={onRetryHandler} type='usual'>Retry</Button>&nbsp;
            <Link to='/'>
                <Button type='success'>To List</Button>
            </Link>

        </div>
    )
}

export default FinishedQuiz;
