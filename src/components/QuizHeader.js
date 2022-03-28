import React from 'react';
import { Link } from 'react-router-dom';

function QuizHeader() {
  return (
    <header>
      <h1 class="heading-2 yellow-text center-text">Brain Anatomy</h1>
      <Link to="/" class="header__home-link t-c-4 f-7">
        Home
      </Link>
      <div class="header__subtitle">
        <p class="heading-3 yellow-text">
          Question: <span class="t-c-3">1/5</span>
        </p>
        <p class="heading-4 yellow-text">
          Score : <span class="t-c-3">0</span>
        </p>
      </div>
    </header>
  );
}

export default QuizHeader;
