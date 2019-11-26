import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion";
import QuizEnd from "./QuizEnd";

let quizData = require("./quiz_data.json");

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quiz_position: 1
    };
  }
  render() {
    const isQuizEnd = true;
    const { quiz_position } = this.state;
    return (
      <div>
        {isQuizEnd ? (
          <QuizEnd />
        ) : (
          <QuizQuestion
            quiz_question={quizData.quiz_questions[quiz_position - 1]}
          ></QuizQuestion>
        )}
      </div>
    );
  }
}
export default Quiz;
