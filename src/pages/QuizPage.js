import React from 'react';
import QuizBody from '../components/QuizBody';
import QuizHeader from '../components/QuizHeader';

function QuizPage() {
  return (
    <div id="quiz-body">
      <QuizHeader />
      <QuizBody />
    </div>
  );
}

export default QuizPage;
