import React from 'react';
import { Link } from 'react-router-dom';
import { useQuizState } from '../context/state-context';
import { data } from '../data';

function QuizHeader() {
  const { state } = useQuizState();
  return (
    <header>
      <h1 className="heading-2 yellow-text center-text">Brain Anatomy</h1>
      <Link to="/" className="header__home-link t-c-4 f-7">
        Home
      </Link>
      <div className="header__subtitle">
        <p className="heading-3 yellow-text">
          Question:{' '}
          <span className="t-c-3">
            {state.currentQuestion + 1}/
            {data[state.currentQuizActive].questions.length}
          </span>
        </p>
        <p className="heading-4 yellow-text">
          Score : <span className="t-c-3">{state.score}</span>
        </p>
      </div>
    </header>
  );
}

export default QuizHeader;
