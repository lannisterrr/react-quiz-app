import React from 'react';
import { Link } from 'react-router-dom';
import { useQuizState } from '../context/state-context';
import { data } from '../data';

function QuizHeader() {
  const { state } = useQuizState();
  return (
    <header>
      <h1 class="heading-2 yellow-text center-text">Brain Anatomy</h1>
      <Link to="/" class="header__home-link t-c-4 f-7">
        Home
      </Link>
      <div class="header__subtitle">
        <p class="heading-3 yellow-text">
          Question:{' '}
          <span class="t-c-3">
            {state.currentQuestion + 1}/{data[0].questions.length}
          </span>
        </p>
        <p class="heading-4 yellow-text">
          Score : <span class="t-c-3">{state.score}</span>
        </p>
      </div>
    </header>
  );
}

export default QuizHeader;
