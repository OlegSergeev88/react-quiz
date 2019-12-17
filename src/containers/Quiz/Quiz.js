import React, { Component } from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

export default class Quiz extends Component {

    state = {
        results: {}, // {[id]: 'success' 'error'}
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                question: 'What color is sky?',
                rightAnswerId: 3,
                id: 1,
                answers: [
                    { text: 'Green', id: 1 },
                    { text: 'Red', id: 2 },
                    { text: 'Blue', id: 3 },
                    { text: 'Black', id: 4 }
                ]
            },
            {
                question: 'What color is tree?',
                rightAnswerId: 1,
                id: 2,
                answers: [
                    { text: 'Green', id: 1 },
                    { text: 'Red', id: 2 },
                    { text: 'Blue', id: 3 },
                    { text: 'Black', id: 4 }
                ]
            }
        ]
    }


    handleAnswerClick = (answerId) => {

        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];
        const { results } = this.state;

        if (question.rightAnswerId === answerId) {

            if (!results[question.id]) {
                results[[question.id]] = 'success';
            }



            this.setState({
                answerState: { [answerId]: 'success' },
                results
            })

            const timeout = window.setTimeout(() => {

                if (this.ifQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }

                window.clearTimeout(timeout);
            }, 1500);


        } else {

            results[question.id] = 'error';

            this.setState({
                answerState: { [answerId]: 'error' },
                results
            })
        }

    }

    ifQuizFinished = () => {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }

    onRetryHandler = () => {
        return (
            this.setState({
                results: {},
                isFinished: false,
                activeQuestion: 0,
                answerState: null,
            })
        )
    }

    render() {
        const { quiz, activeQuestion, answerState, results } = this.state;
        return (
            <div className={classes.Quiz}>

                <div className={classes.QuizWrapper}>
                    <h1>Answer the questions</h1>
                    {
                        this.state.isFinished ?
                            <FinishedQuiz
                                results={results}
                                quiz={quiz}
                                onRetryHandler={this.onRetryHandler}
                            /> :
                            <ActiveQuiz
                                answers={quiz[activeQuestion].answers}
                                question={quiz[activeQuestion].question}
                                rightAnswerId={quiz[activeQuestion].rightAnswerId}
                                handleAnswerClick={this.handleAnswerClick}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                answerState={answerState}
                            />
                    }

                </div>
            </div>
        )
    }
}
