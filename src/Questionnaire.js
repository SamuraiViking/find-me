import React from 'react';
import './App.css'
import Questions from './Questions.js'
import { tsConstructorType } from '@babel/types';

class Questionnaire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: 0
        }
    }
    handleClick() {
        const nextQuestion = this.state.currentQuestion + 1
        this.setState({currentQuestion : nextQuestion})
    }; 
    render() {
        const currentQuestion = this.state.currentQuestion
        console.log(`Rendered with ${this.state.currentQuestion}`)
        return (
            <div className="questionnaire">
                {this.currentQuestion}
                <h1 className="title">
                    {Questions[currentQuestion]["question"]}
                </h1>
                <div className="answers">
                    <div className="answer" onClick={() => this.handleClick()}>
                        {Questions[currentQuestion]["answers"][0]}
                    </div>
                    <div className="answer">
                        {Questions[currentQuestion]["answers"][1]}
                    </div>
                </div>
            </div>
        )
    }
};

export default Questionnaire;