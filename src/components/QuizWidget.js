import React from 'react';
import '../CSS/QuizWidget.css';

const QuizWidget = () => {
  return (
    <div className="widget-container">
        
    <div className="quiz-widget-new">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
        </svg>
            <p>New Quiz</p>
    </div>

      <div className="quiz-widget">
        <h3>Mathematics Quiz</h3>
        <p>5 Questions</p>
        <p>Score: 80%</p>
      </div>

      <div className="quiz-widget">
        <h3>English Quiz</h3>
        <p>10 Questions</p>
        <p>Score: 90%</p>
      </div>

      <div className="quiz-widget">
        <h3>History Quiz</h3>
        <p>8 Questions</p>
        <p>Score: 70%</p>
      </div>
    </div>
  );
};

export default QuizWidget;
