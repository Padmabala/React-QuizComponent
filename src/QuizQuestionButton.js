import React, { Component } from "react";
class QuizQuestionButton extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <button>{this.props.button_text}</button>
          </li>
        </ul>
      </div>
    );
  }
}
export default QuizQuestionButton;
