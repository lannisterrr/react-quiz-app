import React from 'react';
import QuizCard from '../components/QuizCard';
import Modal from '../components/Modal';

function Homepage() {
  return (
    <div id="card-body">
      <p class="heading-2 t-c-1 center-text">Brain Quiz</p>
      <main class="card-wrapper">
        <QuizCard />
      </main>
      <Modal />
    </div>
  );
}

export default Homepage;
