import React from 'react';
import './App.css'
import Questions from './Questions.js'
import { tsConstructorType } from '@babel/types';

class Questionnaire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: 0,
            userAnswers: []
        }
    }
    handleClick(answer) {
        const nextQuestion = this.state.currentQuestion + 1
        const userAnswers = this.state.userAnswers
        userAnswers.push(answer)

        console.log(userAnswers)
        this.setState({
            currentQuestion : nextQuestion,
            userAnswers : userAnswers
        })
    }; 
    render() {
        const currentQuestion = this.state.currentQuestion
        const answers = Questions[currentQuestion]["answers"]
        const question = Questions[currentQuestion]["question"]

        return (
            <div className="questionnaire">
                {this.currentQuestion}
                <h1 className="title">
                    {question}
                </h1>
                <div className="answers">
                    {answers.map(answer => (
                        <div className="answer" onClick={() => this.handleClick(answer)}>
                            {answer}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
};

export default Questionnaire;