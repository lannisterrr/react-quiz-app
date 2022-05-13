import React from 'react';
import QuizCard from '../components/QuizCard';
import { data } from '../data';
import Modal from '../components/Modal';

function Homepage() {
  return (
    <div id="card-body">
      <p className="heading-2 t-c-1 center-text">Brain Quiz</p>
      <span className="heading-3">Welcome </span>
      <main className="card-wrapper">
        {data.map(item => (
          <QuizCard key={item.id} item={item} />
        ))}
      </main>
      <Modal />
    </div>
  );
}

export default Homepage;
