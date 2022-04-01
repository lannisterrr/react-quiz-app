import React from 'react';
import QuizCard from '../components/QuizCard';
import Modal from '../components/Modal';

function Homepage() {
  return (
    <div id="card-body">
      <p className="heading-2 t-c-1 center-text">Brain Quiz</p>
      <main className="card-wrapper">
        <QuizCard quizIndex={0}>Quiz 1 : Capitals of the World </QuizCard>
        <QuizCard quizIndex={1}>Quiz 2 : Do you know about France? </QuizCard>
        <QuizCard quizIndex={2}>Quiz 3 : Do you know about India?</QuizCard>
      </main>
      <Modal />
    </div>
  );
}

export default Homepage;
