import React from 'react';
import QuizBody from '../components/QuizBody';
import QuizHeader from '../components/QuizHeader';
import Loader from '../components/Loader';

function QuizPage() {
  return (
    <div id="quiz-body">
      <QuizHeader />
      <QuizBody />
    </div>
  );
}

export default QuizPage;
