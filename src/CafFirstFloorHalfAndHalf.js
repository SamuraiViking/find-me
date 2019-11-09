import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Table from './Table';
import './App.css'
import Questions from './Questions.js'

function CafFirstFloorHalfAndHalf() {
    const currentQuestion = 1;
    return (
        <div class="caf-first-floor-half-and-half-container">
            <h1 class="title">{Questions[currentQuestion]["question"]}  </h1>
            <div class="wrapper">
                <div class="answer">
                    {Questions[currentQuestion]["answers"][0]}
                </div>
                <div class="answer">
                    {Questions[currentQuestion]["answers"][1]}
                </div>
            </div>
        </div>
    )
};

export default CafFirstFloorHalfAndHalf;