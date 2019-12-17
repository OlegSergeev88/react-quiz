import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './QuizList.module.css';

export default class QuizList extends Component {

    showList = () => {
        return (
            [1, 2, 3].map((item, index) => {
                return (<li key={index}>
                    <NavLink to={'/quiz/' + item}>
                        {'Quiz ' + index}
                    </NavLink>
                </li>)
            })
        )
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <h1>Quiz list : </h1>
                <ul>
                    {this.showList()}
                </ul>
            </div>
        )
    }
}
